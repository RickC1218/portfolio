import ProjectCard from '../cards/ProjectCard'
import Logo from '../ui/Logo'
import { PROJECTS } from '@/constants/projects'

const Projects = () => {
  return (
    <section className='flex flex-col gap-10 scroll-mt-32'>
      <Logo text='Projects' size='md' />
      <div className='flex flex-col gap-6 w-full items-center'>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id || `project-${index}`}
            type='large'
            {...project}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
