'use client';

import { TECH_STACK } from '@/constants/tech-stack'
import { Button } from '../ui/Button'
import { getTitleSpecs } from '@/utils/components-utils'

interface ProjectCardProps {
  type?: 'small' | 'large'
  title: string
  description: string
  category: string
  techIds: string[]
  link?: string
  repo?: string
}

const ProjectCard = ({
  type = 'small',
  title,
  description,
  category,
  techIds,
  link,
  repo,
}: ProjectCardProps) => {
  const types = {
    small: 'max-w-52 max-h-36',
    large: 'max-w-80 max-h-44',
  }

  const { TitleTag, titleClass, bodyClass, descClass } = getTitleSpecs(type)

  return (
    <article
      className={`flex ${type === 'small' ? 'gap-3' : 'gap-6'} bg-bg-card border border-secondary rounded-3xl w-[90%] p-1.5 transition-all hover:border-primary/50`}
    >
      <div
        className={`${types[type]} rounded-2xl aspect-video w-full bg-bg-main border border-secondary overflow-hidden`}
      ></div>

      <div
        className={`flex flex-col w-full justify-between ${type === 'small' ? ' gap-2 py-0.5 pr-0.5' : 'gap-3 py-2 pr-2'}`}
      >
        <header>
          <p className={`${bodyClass} text-primary drop-shadow-primary`}>
            {category}
          </p>
          <TitleTag className={`${titleClass} text-accent line-clamp-1`}>
            {title}
          </TitleTag>
          <p
            className={`${descClass} text-accent/80 line-clamp-2 md:line-clamp-3`}
          >
            {description}
          </p>
        </header>

        <footer className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            {techIds.map((id) => {
              const tech = TECH_STACK[id]
              if (!tech) return null
              return (
                <tech.icon
                  key={id}
                  size={type === 'small' ? 18 : 22}
                  style={{ color: tech.color }}
                  title={tech.name}
                />
              )
            })}
          </div>

          <div className='flex gap-2 items-center'>
            {link && (
              <Button
                variant='primary'
                size='xs'
                onClick={() => window.open(link, '_blank')}
              >
                Link
              </Button>
            )}
            {repo && (
              <Button
                variant='white'
                size='xs'
                onClick={() => window.open(repo, '_blank')}
              >
                Repo
              </Button>
            )}
          </div>
        </footer>
      </div>
    </article>
  )
}

export default ProjectCard
