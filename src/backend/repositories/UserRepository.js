import database from "./database";

const databaseName = "users";

export async function getFromName(name) {
    const result = await database.any(`SELECT * FROM ${databaseName} WHERE username = $1`, [name]);
    if (result.length > 0) {
        return result[0];
    }
    return undefined;
}

export async function get(id) {
    const result = await database.any(`SELECT * FROM ${databaseName} WHERE id = $1`, [id]);
    if (result.length > 0) {
        return result[0];
    }
    return undefined;
}

export async function getAll() {
    return await database.any(`SELECT * FROM ${databaseName}`);
}

export async function addUserToDatabase(name, username, email, passhash) {
    await database.any(
      `INSERT INTO ${databaseName} (preferred_name, username, email, passhash, role_id) VALUES ($1, $2, $3, $4, 1);`,
      [name, username, email, passhash]
    );
}

