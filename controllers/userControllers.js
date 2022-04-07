let users = require('../Users')
const uuid = require('uuid');

// Utility
const idFilter = req => user => String(user.id) === req.params.id;

const getAllUsers = (req, res) => res.json(users)

const getOneUser = (req, res) => {
    const found = users.some(idFilter(req));

    if (found) {
        res.json(users.filter(idFilter(req)));
    } else {
        res.status(400).json({ message: `No user with the id of ${req.params.id}` });
    }
}

const createUser = (req, res) => {
    const newUser = {...req.body, id: uuid.v4()};

    if (!newUser.name || !newUser.email) {
        return res.status(400).json({ message: 'Please include a name and email' });
    }

    users.push(newUser);
    res.json(users);
}

const updateUser = (req, res) => {
    const found = users.some(idFilter(req));

    if (found) {
        users.forEach((user, i) => {
            if (idFilter(req)(user)) {
                const updUser = {...user, ...req.body};
                users[i] = updUser
                res.json({ message: 'User updated', updMember: updUser });
            }
        });
    } else {
        res.status(400).json({ message: `No user with the id of ${req.params.id}` });
    }
}

const deleteUser = (req, res) => {
    const found = users.some(idFilter(req));

    if (found) {
        const newData = users.filter((user) => String(user.id) !== req.params.id)
        users = [...newData]
        res.json(res.json(users));
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