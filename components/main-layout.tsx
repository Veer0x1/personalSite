import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props

  return (
    <>
      <Header />
      <main id='skip-nav' className='mx-auto mb-16 w-full max-w-5xl flex-1 px-4 py-24 sm:px-8'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
