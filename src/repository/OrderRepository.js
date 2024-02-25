import {Order} from "@/dao/Order"
import {GetDB} from "./Database"
import {ObjectId} from "mongodb"

export class OrderRepository {
    static collectionName = 'orders'

    constructor () {
        const setup = async function() {
            const db = await GetDB()
            db.collection(OrderRepository.collectionName).createIndex({
                "transactionID": 1
            }, {
                unique: true,
                partialFilterExpression: {
                    "transactionID": {
                        $type: "string"
                    }
                }
            });
        }
        setup()
    }

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
    async updateVerificationStatusByID(id, status) {
        const db = await GetDB()

        const collection = db.collection(OrderRepository.collectionName)
        const result = await collection.updateOne({"_id": new ObjectId(id)}, {
            $set: {
                "status": status
            }
        })
        return result
    }
}