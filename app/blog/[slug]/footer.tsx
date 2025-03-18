'use client'

// import { linkVariants } from '@/components/link'

// import Link from 'next/link'
// import { usePostContext } from '@/contexts/post'
import { useFormattedDate } from '@/hooks/use-formatted-date'

// const editURL = (slug: string) =>
//   `https://github.com/tszhong0411/honghong.me/blob/main/apps/web/src/content/blog/${slug}.mdx?plain=1`

const Footer = () => {
//   const { slug, modifiedTime } = usePostContext()
//   const t = useTranslations()
    const modifiedTime = '2021-10-01T00:00:00.000Z'
  const formattedDate = useFormattedDate(modifiedTime)

  return (
    <div className='my-8 flex w-full items-center justify-between py-4 text-sm'>
      {/* <Link href={editURL(slug)} className={linkVariants({ variant: 'muted' })}>
        {t('blog.footer.edit-on-github')}
      </Link> */}
      <div className='text-muted-foreground'>
        {/* {'Last updated'{ date: formattedDate }} */}
        {`Last updated ${formattedDate
          .split(' ')
          .slice(0, 2)
          .join(' ')}`}
      </div>
    </div>
  )
}

export default Footer
