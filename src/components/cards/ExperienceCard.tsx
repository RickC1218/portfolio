import { getTitleSpecs } from '@/utils/components-utils'
import { ExperienceTimeline } from '../ui/ExperienceTimeLine'

interface ExperienceCardProps {
  type?: 'small' | 'large'
}
const ExperienceCard = ({ type = 'small' }: ExperienceCardProps) => {
  const { TitleTag, titleClass, bodyClass, descClass } = getTitleSpecs(type)

  return (
    <article className={`flex ${type === 'small' ? 'gap-2' : 'gap-4'} w-full`}>
      <ExperienceTimeline type={`${type}`} />
      <div
        className={`flex ${type === 'small' ? 'gap-2' : 'gap-4'} flex-col w-full`}
      >
        <header className='flex items-baseline justify-between'>
          <div>
            <TitleTag className={`${titleClass} text-accent`}>
              Experience 1
            </TitleTag>
            <p className={`${bodyClass} text-primary drop-shadow-primary`}>
              Front End Developer
            </p>
          </div>
          <p className={`${bodyClass} text-primary drop-shadow-primary`}>
            2024-Currently
          </p>
        </header>
        <p
          className={`${descClass} text-accent ${type === 'small' ? 'line-clamp-3' : 'line-clamp-2'} `}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </article>
  )
}

export default ExperienceCard
