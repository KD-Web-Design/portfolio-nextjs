/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Section } from './Section'
import PP from './PP'

export default function Hero() {
  return (
    <Section className='flex max-lg:flex-col items-start'>
        <div className='flex-[2]'>
            <h2>Salut, moi c'est <span className='bg-gradient-to-r from-teal-400 to-yellow-200 text-transparent bg-clip-text font-bold'>Killiam</span></h2>
            <h3>Développeur frontend passionné, j'allie design intuitif et technologies modernes pour créer des interfaces web réactives et esthétiques.</h3>
            <div className='flex-1'>
                <PP className='w-1/2 h-auto'/>
            </div>
        </div>
    </Section>
  )
}
