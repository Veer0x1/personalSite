import PageTitle from "@/components/page-title"


const Page = async () => {
    const title = 'Blog'
    const description = 'My personal website and blog where I share my thoughts on various topics including tutorials, notes, and personal experiences. As a full-stack engineer from Hong Kong, I started learning web development as a hobby in December 2020. I use Next.js for building websites, GitHub for code hosting, and Vercel for deployment. Explore my site to learn more about my Journey and discover some of the web development resources that have inspired me.'

    return (
        <>
            <PageTitle title={title} description={description} />
        </>
    )
}

export default Page