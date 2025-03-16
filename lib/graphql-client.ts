import { GraphQLClient } from 'graphql-request'

const HASHNODE_API_URL = 'https://gql.hashnode.com'
const HASHNODE_API_KEY = process.env.HASHNODE_API_KEY // if needed

export const client = new GraphQLClient(HASHNODE_API_URL, {
  headers: {
    Authorization: HASHNODE_API_KEY || '',
  },
})