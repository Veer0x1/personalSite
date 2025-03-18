'use client'

import { cn } from "@/lib/utils";
import ThemeSwitcher from './theme-switcher'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Link from "next/link";
import Navbar from "./navbar";
import MobileNav from "./mobile-nav";
import { HomeIcon } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    document.addEventListener('scroll', changeBackground)

    return () => document.removeEventListener('scroll', changeBackground)
  }, [])

  return (
    <motion.header
      className={cn(
        'bg-background/95 border-grid sticky top-0 border-b shadow-xs inset-x-0 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between px-8 saturate-100 backdrop-blur transition-colors supports-[backdrop-filter]:bg-background/60',
        isScrolled && 'bg-background/80'
      )}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.3
      }}
    >
      <a
        href='#skip-nav'
        className='bg-background focus-visible:ring-ring rounded-xs shadow-xs focus-visible:ring-3 fixed left-4 top-4 -translate-y-20 border p-2 font-medium transition-transform focus-visible:translate-y-0 focus-visible:ring-offset-2'
      >
        <span>{'layout.skip-to-main-content'}</span>
      </a>
      <Link
        href='/'
        className='flex items-center justify-center gap-1'
        aria-label={'layout.home'}
      >
        <HomeIcon width={28} height={28} aria-hidden='true' />
      </Link>
      <div className='flex items-center gap-2'>
        <Navbar />
        <ThemeSwitcher />
        <MobileNav />
      </div>
    </motion.header>
  )
}

export default Header