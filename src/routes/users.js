const express = require('express');
const router = express.Router();
const userModel = require('../models/User');

router.post('/', async (req, res) => {
    try {
        const { body: user } = req;

        const newUser = await userModel.save(user);
        res.status(201).send(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

});

module.exports = router;