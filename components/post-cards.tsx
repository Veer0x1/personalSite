'use client'

import type { PostFragment } from '../generated/graphql'

// import { useTranslations } from '@tszhong0411/i18n/client'
// import { BlurImage } from '@tszhong0411/ui'
import Image from 'next/image'

import { useFormattedDate } from '@/hooks/use-formatted-date'

import Link from 'next/link'

type PostCardsProps = {
  posts: PostFragment[]
}

type PostCardProps = PostFragment

const PostCards = (props: PostCardsProps) => {
  const { posts } = props

  return (
    <div className='grid gap-4 md:grid-cols-2'>
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  )
}

const PostCard = (props: PostCardProps) => {
  // const { slug, title, summary, date } = props
  const { slug, title, brief, publishedAt, views, reactionCount, coverImage } = props
  const formattedDate = useFormattedDate(publishedAt)
  // const t = useTranslations()
  const likes = reactionCount
  // const viewsQuery = api.views.get.useQuery({
  //   slug
  // })

  // const likesQuery = api.likes.get.useQuery({
  //   slug
  // })
  // const viewQuery = 0;
  return (
    <Link href={`/blog/${slug}`} className='shadow-feature-card group rounded-xl px-2 py-4'>
      <Image
        src={coverImage?.url || '/images/projects/blog/cover.png'}
        className='rounded-lg transition-transform group-hover:scale-105'
        width={1200}
        height={630}
        alt={title}
      />
      <div className='flex items-center justify-between gap-2 px-2 pt-4 text-sm text-zinc-500'>
        {formattedDate}
        <div className='flex gap-2'>
          {/* {likesQuery.status === 'pending' ? '--' : null} */}
          {/* {likesQuery.status === 'error' ? t('common.error') : null} */}
          {/* {likesQuery.status === 'success' ? (
            <div>{t('common.likes', { count: likesQuery.data.likes })}</div>
          ) : null} */}
          <div>{`Likes: ${likes}`}</div>
          <div>&middot;</div>
          {/* {viewsQuery.status === 'pending' ? '--' : null} */}
          {/* {viewsQuery.status === 'error' ? t('common.error') : null} */}
          {/* {viewsQuery.status === 'success' ? (
            <div>{t('common.views', { count: viewsQuery.data.views })}</div>
          ) : null} */}
          <div>{`Views: ${views}`}</div>
        </div>
      </div>
      <div className='flex flex-col px-2 py-4'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='text-muted-foreground mt-2'>{brief}</p>
      </div>
    </Link>
  )
}

export default PostCards
