import React from 'react'
import { Section } from './Section'
import OpenAIIcon from './icons/OpenAIIcon'
import ReactIcon from './icons/ReactIcon'
import TailwindIcon from './icons/TailwindIcon'
import TypescriptIcon from './icons/TypescriptIcon'
import { Highlights } from './Highlights'
import { CornerRightDownIcon } from 'lucide-react'

export default function Stack() {
  return (
    <Section className='flex flex-col gap-4 items-start'>
        <div className='inline-flex items-center gap-2'>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Ma Stack
            </h2>
            <CornerRightDownIcon size={32} />
        </div>

        <div className='flex max-md:flex-col gap-4'>
            <div className='flex flex-col gap-2 flex-1 w-full'>
               <ReactIcon size={42} className='animate-spin' style={{animationDuration: "8s"}} />
                <h3 className="mb-2 text-xl font-semibold tracking-tight">ReactJS</h3>
                <p className="text-sm text-muted-foreground">Pour construire des applications modernes et performantes.</p>
            </div>
            <div className='flex flex-col gap-2 flex-1 w-full'>
                <TailwindIcon size={42} />
                <h3 className="mb-2 text-xl font-semibold tracking-tight">TailwindCSS</h3>
                <p className="text-sm text-muted-foreground">Pour être très flexible sur votre design tout en étant responsive.</p>
            </div>
            <div className='flex flex-col gap-2 flex-1 w-full'>
                <TypescriptIcon size={42}  />
                <h3 className="mb-2 text-xl font-semibold tracking-tight">Typescript</h3>
                <p className="text-sm text-muted-foreground">Le tout en utilisant<Highlights>Typescript</Highlights>, pour faciliter la maintenance du code.</p>
            </div>
            <div className='flex flex-col gap-2 flex-1 w-full'>
                <OpenAIIcon size={42} className='animate-spin' style={{animationDuration: "8s"}} />
                <h3 className="mb-2 text-xl font-semibold tracking-tight">OpenAI</h3>
                <p className="text-sm text-muted-foreground">L'intelligence artificielle, pour gagner en efficacité.</p>
            </div>
        </div>
    </Section>
  )
}
