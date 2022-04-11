class UserService {
    constructor() {
        this.users = [
            {
                id: '1',
                name: 'John Doe',
                email: 'john@gmail.com',
            },
            {
                id: '2',
                name: 'Bob Williams',
                email: 'bob@gmail.com',
            },
            {
                id: '3',
                name: 'Shannon Jackson',
                email: 'shannon@gmail.com',
            },
            {
                id: '4',
                name: 'Williams Doe',
                email: 'Doe@gmail.com',
            }
        ]
    }

    getUsers() {
        return this.users
    }

    getUserById(id) {
        const foundUser = this.users.filter((user) => user.id === id)
        return foundUser.length ? foundUser[0] : false
    }

    addUser(newUser) {
        this.users.push(newUser)
        return this.users
    }

    changeUser(id, userUpd) {
        const exist = this.users.filter((user) => user.id === id);

        if (exist.length) {
            this.users.forEach((user, i) => {
                if (user.id === id) {
                    this.users[i] = {...user, ...userUpd};
                }
            });
            return this.users.filter((user) => user.id === id)[0]
        } else {
            return false
        }
    }

    deleteUser(id) {
        const found = this.users.some((user) => user.id === id)

        if(found) {
            const newData = this.users.filter((user) => user.id !== id)
            return this.users = [...newData]
        } else {
            return false
        }
    }
}

module.exports = new UserService();
