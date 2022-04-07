const express = require('express');
const router = express.Router();
const {getAllUsers, getOneUser, createUser, updateUser, deleteUser} = require('../controllers/userControllers')


router
    .get('/', getAllUsers)
    .get('/:id', getOneUser)
    .post('/', createUser)
    .put('/:id', updateUser)
    .delete('/:id', deleteUser)

module.exports = router;