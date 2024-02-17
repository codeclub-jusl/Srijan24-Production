import {Order} from "@/dao/Order"
import {GetDB} from "./Database"
import {ObjectId} from "mongodb"

export class OrderRepository {
    static collectionName = 'orders'

    /**
     * @param {Order} order 
     */
    async insertOrder(order) {
        const db = await GetDB()
        const collection = db.collection(OrderRepository.collectionName)
        const result = await collection.insertOne(order)
        return result.insertedId
    }

    async findAll() {
        const db = await GetDB()
        const collection = db.collection(OrderRepository.collectionName)
        const docs = await collection.find({}).toArray()
        return docs
    }

    /**
     * 
     * @param {string} id 
     * @param {boolean} isVerified 
     */
    async updateVerificationStatusByID(id, isVerified) {
        const db = await GetDB()
        const collection = db.collection(OrderRepository.collectionName)
        const result = await collection.updateOne({"_id": new ObjectId(id)}, {
            $set: {
                "isVerified": isVerified
            }
        })
        return result
    }
}