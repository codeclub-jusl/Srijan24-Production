import {MongoClient, Db, ServerApiVersion} from "mongodb"


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

    const client = new MongoClient(process.env.MONGO_URL, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
    );

    await client.connect()
    DB = client.db(process.env.MONGO_DATABASE_NAME)
    return DB
}