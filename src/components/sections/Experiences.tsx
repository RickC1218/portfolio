import { EXPERIENCES } from '@/constants/experiences'
import Logo from '../ui/Logo'
import ExperienceCard from '../cards/ExperienceCard'

const Experiences = () => {
  return (
    <section className='flex flex-col gap-10 scroll-mt-32'>
      <Logo text='Experiences' size='md' />
      <div className='flex flex-col w-full items-center'>
        {EXPERIENCES.map((experience, index) => (
          <ExperienceCard
            key={experience.id || `experience-${index}`}
            type='large'
            {...experience}
          />
        ))}
      </div>
    </section>
  )
}

export default Experiences
