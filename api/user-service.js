const users = require('../data/users.json')

async function getById(userId) {
    try {
        const user = users.find(user => user.id === userId)
        return user
    } catch (error) {
        console.log('Failed Getting User By ID', error);
        throw err
    }
}
async function query() {
    try {
        console.log('users:',users);
        return users
    } catch (error) {
        console.log('Failed Getting Users', error);
        throw err
    }
}

module.exports = {
    getById,
    query,
}