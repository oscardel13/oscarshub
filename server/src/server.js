const http = require('http');
const path = require('path');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');
require('dotenv').config();

const app = require('./app');

const {loadResume} = require('./models/resume.models');

const typesArray = loadFilesSync(path.join(__dirname, 'graphql/**/*'),{
    extensions: ['graphql'],
});

const resolversArray = loadFilesSync(path.join(__dirname, 'graphql/**/*'),{
    extensions: ['resolvers.js'],
});

const { mongoConnect } = require('./services/mongo');

const PORT = process.env.PORT || 8000;

async function startApolloServer(){
    // const app = express()
    app.get('', (req,res)=>{
        res.send("Hello World")
    })
    const httpServer = http.createServer(app)

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray
    });
    
    const server = new ApolloServer({
        // Await any data needed at the start of server life???
        schema
    });

    await server.start()
    await mongoConnect()
    // await loadResume()

    server.applyMiddleware({ app, path: '/graphql' });

    httpServer.listen(PORT, ()=>{
        console.log('Running GraphQL server...')
    })
}

startApolloServer();

