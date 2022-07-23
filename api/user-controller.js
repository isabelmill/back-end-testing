const userService = require('./user-service.js')

async function getUser(req, res) {
    try {
        const user = await userService.getById(req.params.userId)
        res.send(user)
    } catch (error) {
        console.log('Failed to get user', error);
        res.status(500).send({
            err: 'Failed to get user'
        })
    }
}
async function getUsers(req, res) {
    try {
        const users = await userService.query()
        console.log('users:', users);
        res.send(users)
    } catch (error) {
        console.log('Failed to get users', error);
        res.status(500).send({
            err: 'Failed to get users'
        })
    }
}

module.exports = {
    getUser,
    getUsers
}