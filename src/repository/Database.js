import {MongoClient, Db} from "mongodb"


/**
 * @type {Db}
 */
let DB = null

export async function GetDB() {
    if(!process.env.MONGO_URL) {
        throw new Error('could not instantiate database connection')
    }

    if(DB) {
        return DB
    }

    const client = await MongoClient.connect(process.env.MONGO_URL)
    DB = client.db(process.env.MONGO_DATABASE_NAME)
    return DB
}