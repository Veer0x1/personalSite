import { request } from 'graphql-request'
import { SinglePostByPublicationQuery, SinglePostByPublicationQueryVariables, SinglePostByPublicationDocument } from '@/generated/graphql'

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT

export async function getPostBySlug(slug: string) {
    const variables: SinglePostByPublicationQueryVariables = {
        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST!,
        slug: slug,
    }

    try {
        const data = await request<SinglePostByPublicationQuery, SinglePostByPublicationQueryVariables>(
            GQL_ENDPOINT!,
            SinglePostByPublicationDocument,
            variables
        )
        // console.log('data is:', data)
        if (!data.publication) {
            throw new Error('Publication not found')
        }
        return data.publication.post
    } catch (error) {
        console.error('Error fetching post:', error)
    }
}