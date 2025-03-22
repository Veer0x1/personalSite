import Image from 'next/image'
import Link from 'next/link'
import { useFormattedDate } from '@/hooks/use-formatted-date'
type Props = {
    title: string | undefined
    likes: number
    PublishedDate: string
    views: number
}
const Header = (props: Props) => {
    const formattedDate = useFormattedDate(props.PublishedDate)

    return (
        <div className='space-y-16'>
            <div className='space-y-16 sm:px-8'>
                <h1 className='bg-linear-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl md:leading-[64px] dark:from-white dark:via-white/90 dark:to-white/70'>
                    {props.title}
                </h1>
                <div className='grid grid-cols-2 text-sm max-md:gap-4 md:grid-cols-4'>
                    <div className='space-y-1 md:mx-auto'>
                        <div className='text-muted-foreground'>{'Written by'}</div>
                        <Link href='https://github.com/Veer0x1'target='_blank' className='flex items-center gap-2'>
                            <Image
                                src='/images/me.png'
                                className='rounded-full'
                                width={24}
                                height={24}
                                alt='Balveer Singh Rao'
                            />
                            Balveer Singh Rao
                        </Link>
                    </div>
                    <div className='space-y-1 md:mx-auto'>
                        <div className='text-muted-foreground'>{'Published on'}</div>
                        <div>{formattedDate}</div>
                    </div>
                    <div className='space-y-1 md:mx-auto'>
                        <div className='text-muted-foreground'>{'Views'}</div>
                        {props.views}
                    </div>
                    <div className='space-y-1 md:mx-auto'>
                        <div className='text-muted-foreground'>{'Likes'}</div>
                        {props.likes}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
