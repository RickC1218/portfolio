import Feel from '@/components/sections/Feel'
import Projects from '@/components/sections/Projects'
import Experiences from '@/components/sections/Experiences'
import Skills from '@/components/sections/Skills'

export default function Home() {
  return (
    <div className='flex flex-col gap-16 pb-20'>
      <section id='hero' className='scroll-mt-32'>
        <Feel size='large' />
      </section>

      <section id='projects' className='scroll-mt-28'>
        <Projects />
      </section>

      <section id='skills' className='scroll-mt-28'>
        <Skills />
      </section>

      <section id='experience' className='scroll-mt-28'>
        <Experiences />
      </section>
    </div>
  )
}
