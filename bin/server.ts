import "reflect-metadata";
import express from 'express';
import http from 'http';
import {
    ApolloServerPluginDrainHttpServer
} from 'apollo-server-core';

import dotenv from 'dotenv';
dotenv.config();

import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql"
import { S3Resolver } from "../src/resolvers/S3Resolver";
import { graphqlUploadExpress } from "graphql-upload";
import { customAuthChecker } from "../src/services/auth/Authenticated";

const port = normalizePort(process.env.PORT || '4000');

(async function main() {
    const app = express();
    app.use(graphqlUploadExpress());

    const httpServer = http.createServer(app);

    const schema = await buildSchema({
        resolvers: [
            S3Resolver
        ],
        emitSchemaFile: 'src/schema/schemas.gql',
        authChecker: customAuthChecker,
        authMode: "null",
    });

    const server = new ApolloServer({
        schema,
        context: ({ req }) => {
            return { token: req.headers['authorization'] };
        },
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
        ]
    });

    await server.start();
    server.applyMiddleware({ app });

    await new Promise<void>(resolve => httpServer.listen({ port }, resolve));
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
}())

function normalizePort(val: string) {
    const port = parseInt(val, 10);

    if (isNaN(port))
        return val;

    if (port >= 0)
        return port;

    return false;
}
