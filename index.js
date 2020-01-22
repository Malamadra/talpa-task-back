import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'
import path from 'path'

const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, './graphql/resolvers'))
)
const typeDefs = mergeTypes(
  fileLoader(path.join(__dirname, './graphql/schema')),
  { all: true }
)

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const app = express()

server.applyMiddleware({ app })

const port = 4000

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`)
)
