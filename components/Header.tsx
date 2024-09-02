import React from 'react'
import { Section } from './Section'
import { Button, buttonVariants } from './ui/button'
import GithubIcon from './icons/GithubIcon'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import LinkedInIcon from './icons/LinkedInIcon'
import GmailIcon from './icons/GmailIcon'

export default function Header() {
  return (
    <header className='sticky top-0 py-4'>
        <Section className='flex'>
            <h1 className='text-lg font-bold text-primary'>kd-web-design.dev</h1>
            <div className='flex-1'>
                <ul className='flex items-center gap-2 justify-end'>
                    <Link href="https://github.com/KD-Web-Design" target='_blank' className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <GithubIcon size={24} className='text-foreground' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/kd-web-design-64b496315/" target='_blank' className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <LinkedInIcon size={24} className='text-foreground' />
                    </Link>
                    <Link href="mailto:contact.kd.webdesign@gmail.com" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <GmailIcon size={24} className='text-foreground' />
                    </Link>
                </ul>
            </div>
        </Section>
    </header>
  )
}
