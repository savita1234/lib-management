const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const {mongoose} = require('mongoose');
const fs = require('fs');
const path = require('path');

const root = require('./resolvers');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/library_system',{ useNewUrlParser: true, useUnifiedTopology: true });
const schemaString = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8');
const schema = buildSchema(schemaString);
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
}));

app.get('/', (req,res)=> {
    res.status(200);
    res.send("welcome to first url.")

})
app.listen(port, (error) => {
    if(!error)
        console.log('server is running');
    else
        console.log('error while running the app.');
})