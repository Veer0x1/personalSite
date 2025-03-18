import {Mdx }from '@/components/mdx/mdx'
import ProgressBar from '@/components/progress-bar'
import { getPostBySlug } from '@/lib/services/postBySlug'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import remarkDirective from 'remark-directive'
import remarkMdx from 'remark-mdx'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

type PageProps = {
  params: {
    slug: string
  }
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params
  const post = await getPostBySlug(slug)

  console.log('post is:', post)

  const code = post?.content.markdown

  const transformEmbeds = (code: string) => code.replace(/%\[(.*?)\]/g, "$1");
  const removeAligns = (code: string) => code.replace(/align=\"(left|right|center)\"/g, "");
  const sanatize = (code: string) => removeAligns(transformEmbeds(code));
  sanatize(code!);
  const mdxSource = await serialize(code!,{
    mdxOptions:{
      remarkPlugins: [remarkGfm, remarkDirective, remarkMdx, remarkMdxFrontmatter],
      rehypePlugins: [rehypeRaw]
    }
  }) 
  console.log("mdxSource is:", mdxSource.compiledSource)
  return (
    <>
      {/* <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        /> */}

      {/* <Providers post={post}> */}
      {/* <Header /> */}

      <div className='mt-8 flex flex-col justify-between lg:flex-row'>
      {/* <h1>{mdxSource.frontmatter}</h1> */}
        <article className='w-full lg:w-[670px]'>
          <Mdx code={code!} />

        </article>
        <aside className='lg:min-w-[270px] lg:max-w-[270px]'>
          <div className='sticky top-24'>
            {/* {toc.length > 0 ? <TableOfContents toc={toc} /> : null} */}
            {/* {flags.likeButton ? <LikeButton slug={slug} /> : null} */}
          </div>
        </aside>
      </div>
      <ProgressBar />

      {/* {toc.length > 0 ? <MobileTableOfContents toc={toc} /> : null} */}
      {/* <Footer /> */}
      {/* </Providers> */}

      {/* {flags.comment ? (
          <Suspense>
            <Comments slug={slug} />
          </Suspense>
        ) : null} */}
    </>
  )
}

export default Page