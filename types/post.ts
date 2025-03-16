export type BlogPost = {
  id: string
  title: string
  url: string
  slug: string
  brief: string
  publishedAt: string
  views: number
  reactionCount: number
  author: {
    name: string
    profilePicture?: string | null
    username: string
  }
  coverImage?: {
    url: string
  } | null
  tags?: Array<{
    name: string
  }> | null
}