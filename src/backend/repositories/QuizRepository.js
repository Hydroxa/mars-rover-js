import database from "./database";

const databaseName = "quiz";

export async function getAll() {
    return await database.any(`SELECT * FROM ${databaseName}`);
}
