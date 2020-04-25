const { connecting } = require('./connect');

const save = async (user) => {
    const connection = await connecting();
    try {
        const query = `INSERT INTO users 
        (rut, names, last_names, email, address, date_of_birth, date_of_death)
        VALUES($1, $2, $3, $4, $5, $6, $7)
        RETURNING *`;

        const values = [user.rut, user.names, user.last_names, user.email, user.address, user.date_of_birth, user.date_of_death];
        const result = await connection.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw { error }
    } finally {
        connection.release();
    }
}

module.exports = {
    save
}