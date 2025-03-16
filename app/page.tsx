import Hero from "@/components/home/hero";
// import Image from "next/image";

// type PageProps = {
//   params: Promise<{
//     locale: string
//   }>
//   searchParams: Promise<Record<string, string | string[] | undefined>>
// }

const Page = async () => {
  // const { locale } = await props.params
  // setRequestLocale(locale)
  // const t = await getTranslations('metadata')

  // const url = `${SITE_URL}${getLocalizedPath({ slug: '', locale })}`

  // const jsonLd: WithContext<WebSite> = {
  //   '@context': 'https://schema.org',
  //   '@type': 'WebSite',
  //   name: t('site-title'),
  //   description: t('site-description'),
  //   url,
  //   author: {
  //     '@type': 'Person',
  //     name: SITE_NAME,
  //     url: SITE_URL,
  //     sameAs: [SITE_FACEBOOK_URL, SITE_INSTAGRAM_URL, SITE_X_URL, SITE_GITHUB_URL, SITE_YOUTUBE_URL]
  //   },
  //   mainEntityOfPage: {
  //     '@type': 'WebPage',
  //     '@id': SITE_URL
  //   },
  //   inLanguage: locale,
  //   copyrightYear: new Date().getFullYear(),
  //   keywords: SITE_KEYWORDS,
  //   dateCreated: '2020-12-05',
  //   dateModified: new Date().toISOString()
  // }

  return (
    <>
      {/* <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
      <Hero />
      {/* <SelectedProjects />
      <AboutMe />
      <LatestArticles />
      <GetInTouch /> */}
    </>
  )
}

export default Page