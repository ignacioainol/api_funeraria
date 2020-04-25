const { Pool } = require("pg");

const pool = new Pool({
    user: "exgqaeel",
    host: "drona.db.elephantsql.com",
    database: "exgqaeel",
    password: "w3eQKuZ10YV7ca7v5b2gQRZQztxoBl5B"
});

const connecting = async () => {
    const client = await pool.connect();
    return client;
};

exports.connecting = connecting;
