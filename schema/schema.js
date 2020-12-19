const { buildSchema } = require("graphql")


const userSchema = buildSchema(`

type Query {
    users : [User]
}
type User {
    name: String,
    email: String,
    number: String
}

`)

module.exports = userSchema

