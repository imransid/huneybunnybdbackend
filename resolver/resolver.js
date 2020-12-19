// this resolver our output

// const User = require('../model/model')

const UserDB = [
    {
        name: 'Imran',
        id: 2,
        number: '01869882560',
        email: 'emailofimrzan'
    },
    {
        name: 'Khan',
        id: 2,
        number: '01869882560',
        email: 'emailofimrzan'
    },
    {
        name: 'Opu',
        id: 2,
        number: '01869882560',
        email: 'emailofimrzan'
    }
]

const resolver = {
    users: () => {
        return UserDB
    }
}


module.exports = resolver