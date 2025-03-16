import { request } from 'graphql-request'
import { PostsByPublicationDocument, PostsByPublicationQuery, PostsByPublicationQueryVariables } from '@/generated/graphql'

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT

export async function getPosts() {
  const variables: PostsByPublicationQueryVariables = {
    host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST!,
    first: 20,
  }
  try {
    const data = await request<PostsByPublicationQuery,PostsByPublicationQueryVariables>(
      GQL_ENDPOINT!,
      PostsByPublicationDocument,
      variables
    )
    console.log("data is: ",data)
    if (!data.publication) {
      throw new Error('Publication not found')
    }
    return data.publication.posts.edges.map(edge => edge.node)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}