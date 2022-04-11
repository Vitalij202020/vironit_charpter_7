const userService = require('../services/userServices')
const uuid = require('uuid');

const getAllUsers = (req, res) => res.json(userService.getUsers())

const getOneUser = (req, res) => {
    const found = userService.getUserById(req.params.id)
    if (found) {
        res.json(found);
    } else {
        res.status(400).json({ message: `No user with the id of ${req.params.id}` });
    }
}

const createUser = (req, res) => {
    const newUser = {...req.body, id: uuid.v4()};
    if (!newUser.name || !newUser.email) {
        return res.status(400).json({ message: 'Please include a name and email' });
    }
    res.json(userService.addUser(newUser));
}

const updateUser = (req, res) => {
    const result = userService.changeUser(req.params.id, req.body)

    if (result) {
        res.json({ message: 'User updated', updUser: result });
    } else {
        res.status(400).json({ message: `No user with the id of ${req.params.id}` });
    }
}

const deleteUser = (req, res) => {
    const answer = userService.deleteUser(req.params.id)
    if (answer) {
        res.json(answer);
    } else {
        res.status(400).json({ message: `No user with the id of ${req.params.id}` });
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}
