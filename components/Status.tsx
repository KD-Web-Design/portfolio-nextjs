/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Section } from './Section'
import { ProjectsSection } from './status/ProjectsSection'
import { CertificatesSection } from './status/CertificatesSection'
import { ContactSection } from './status/ContactSection'

export default function Status() {
  return (
    // CARDS PROJETS PERSOS 
    <Section className='flex max-md:flex-col items-start gap-4'>
        <ProjectsSection />
        <div className='flex-1 h-full gap-4 flex w-full flex-col'>
            <CertificatesSection />
            <ContactSection />
        </div>
    </Section>
  )
}

