//Data access object
import db from "./db/connection.js"

async function listAll(){
    let collection = await db.collection("feedback");
    let results = await collection.find({}).toArray();
    return results
}

export {listAll}