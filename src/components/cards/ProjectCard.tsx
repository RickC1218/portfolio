import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandTailwind,
} from '@tabler/icons-react'
import { Button } from '../ui/Button'
import { getTitleSpecs } from '@/utils/components-utils'
interface ProjectCardProps {
  type?: 'small' | 'large'
}
const ProjectCard = ({ type = 'small' }: ProjectCardProps) => {
  const types = {
    small: 'max-w-52 max-h-36',
    large: 'max-w-80 max-h-44',
  }

  const { TitleTag, titleClass, bodyClass, descClass } = getTitleSpecs(type)

  return (
    <article
      className={`flex ${type === 'small' ? 'gap-3' : 'gap-6'} bg-bg-card border border-secondary rounded-3xl w-full p-1.5`}
    >
      <div
        className={`${types[type]} rounded-2xl aspect-video w-full bg-bg-main border border-secondary`}
      ></div>
      <div
        className={`flex flex-col w-full justify-between ${type === 'small' ? ' gap-2 py-0.5 pr-0.5' : 'gap-3 py-2 pr-2'}`}
      >
        <header>
          <p className={`${bodyClass} text-primary drop-shadow-primary`}>Front End Project</p>
          <TitleTag className={`${titleClass} text-accent`}>
            Finish Thesis
          </TitleTag>
          <p className={`${descClass} text-accent`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </header>
        <footer className='flex justify-between items-middle'>
          <div className='flex gap-3 items-center'>
            <IconBrandReact className='text-primary w-5 h-5' />
            <IconBrandTypescript className='text-primary w-5 h-5' />
            <IconBrandTailwind className='text-primary w-5 h-5' />
          </div>
          <div className='flex gap-3 items-center'>
            <Button variant='primary' size='xs'>
              Link
            </Button>
            <Button variant='white' size='xs'>
              Repo
            </Button>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default ProjectCard
