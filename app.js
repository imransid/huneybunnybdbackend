const express = require("express")

const app = express()

const mongoose = require("mongoose")


const { graphqlHTTP } = require("express-graphql")


const userSchema = require('./schema/schema')
const resolvers = require('./resolver/resolver')


mongoose.connect('mongodb+srv://imran:i343406k@cluster0.a6x0q.mongodb.net/nativeecommerce?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log("Mongo DB connected")).catch((err) => console.log('Error', err))

// Setting graphql
app.use('/graphql', graphqlHTTP({
    schema: userSchema,
    graphiql: true,
    rootValue: resolvers
}))

app.get('/', (req, res) => {
    res.send('hello From backend')
})

app.listen(4000, () => {
    console.log("Server On port 4000")
}) 