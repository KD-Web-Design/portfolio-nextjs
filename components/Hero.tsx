/* eslint-disable @next/next/no-img-element */
import { Highlights } from './Highlights'
import { Section } from './Section'
import PP from './PP'
import ReactIcon from './icons/ReactIcon'
import TailwindIcon from './icons/TailwindIcon'
import NextJSIcon from './icons/NextJSIcon'



export default function Hero() {
  return (
    <Section className='flex max-md:flex-col items-start gap-8'>
        <div className='flex-[2] flex flex-col gap-2'>
            <h2 className='font-caption font-bold text-4xl text-primary'>Salut, moi c'est <span className='bg-gradient-to-r from-teal-400 to-yellow-200 text-transparent bg-clip-text font-bold'>Killiam</span>👋</h2>
            <h3 className='text-3xl font-caption'>Développeur Freelance</h3>
            <p className='font-caption text-lg'>Développeur frontend passionné, j'allie design intuitif et technologies modernes pour créer des interfaces web réactives et esthétiques. J'utilise notamment 
              <Highlights>
                <ReactIcon size={16} className='inline mr-1'/>React
              </Highlights>, 
              <Highlights>
                <NextJSIcon size={16} className='inline mr-1' />
                Next.JS
              </Highlights> ainsi que
              <Highlights>
                <TailwindIcon size={16} className='inline mr-1' />
                TailWindCSS
              </Highlights>.</p>
        </div>
        <div className='flex-1 mx-auto'>
            <PP className='w-full h-auto max-w-sm max-md:w-56'/>
        </div>
    </Section>
  )
}
