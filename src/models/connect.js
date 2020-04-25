const { Pool } = require("pg");

const pool = new Pool({
    user: "exgqaeel",
    host: "drona.db.elephantsql.com",
    database: "exgqaeel",
    password: "Xdwn7HHszO5V4Le-vE-PMdeFyrwflBkQ"
});

const connecting = async () => {
    const client = await pool.connect();
    return client;
};

exports.connecting = connecting;

