const express = require('express');
const router = express.Router();
const userModel = require('../models/User');

/**
 * Add new user
 */
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


/** 
 * Get all users registered 
 * */
router.get('/', async (req, res) => {
    try {
        const users = await userModel.getAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
})



module.exports = router;