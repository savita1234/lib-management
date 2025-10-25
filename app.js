import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { readFile } from 'node:fs/promises';
import  resolvers  from './resolvers.js';

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/library_system');
const schemaString = await readFile('./schema.graphql','utf-8');
const schema = buildSchema(schemaString);
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
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