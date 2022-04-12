const User = require('../models/userModel')

class UserService {

    getUsers () {
       return User.findAll()
    }

    getUserById(id) {
        return User.findOne({where: { id }})
    }

    addUser(newUser) {
        return User.create(newUser)
    }

    changeUser(id, {name, email}) {
        return User.update({name, email},{where: { id }})
    }

    deleteUser(id) {
        return User.destroy({where: { id }})
    }
}

module.exports = new UserService();
