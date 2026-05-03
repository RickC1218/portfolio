import { getTitleSpecs } from '@/utils/components-utils'
import { ExperienceTimeline } from '../ui/ExperienceTimeLine'
import { Experience } from '@/constants/experiences'

interface ExperienceCardProps {
  type?: 'small' | 'large'
  company: string
  role: string
  period: string
  description: string
  location: string
}

const ExperienceCard = ({
  type = 'small',
  company,
  role,
  period,
  description,
  location,
}: ExperienceCardProps) => {
  const { TitleTag, titleClass, bodyClass, descClass } = getTitleSpecs(type)

  return (
    <article
      className={`flex ${type === 'small' ? 'gap-4' : 'gap-6'} w-[90%] group`}
    >
      <ExperienceTimeline type={type} />
      <div className='flex flex-col w-full pb-8'>
        <header className='flex flex-col md:flex-row md:items-baseline justify-between mb-2'>
          <div>
            <TitleTag
              className={`${titleClass} text-accent transition-colors`}
            >
              {company}
            </TitleTag>
            <p
              className={`${bodyClass} text-primary font-medium drop-shadow-primary`}
            >
              {role}
            </p>
          </div>

          <div className='flex flex-col md:items-end'>
            <p className={`${bodyClass} text-primary/80`}>{period}</p>
            <p className='text-[10px] uppercase tracking-widest text-muted'>
              {location}
            </p>
          </div>
        </header>

        <p
          className={`${descClass} text-accent/90 leading-relaxed ${
            type === 'small' ? 'line-clamp-3' : 'line-clamp-none'
          }`}
        >
          {description}
        </p>
      </div>
    </article>
  )
}

export default ExperienceCard
