import React from 'react'
import { Section } from './Section'

export default function Status() {
  return (
    <Section className='flex max-md:flex-col items-center gap-8'>
        <div className='flex-[2] flex flex-col gap-2'>
            Side Projects
        </div>
        <div className="flex-1">
            <div>
                Work
            </div>
            <div>
                Contact me
            </div>
        </div>
    </Section>
  )
}
