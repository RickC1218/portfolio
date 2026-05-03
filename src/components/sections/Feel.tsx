
'use client';
import Avatar from '../ui/Avatar'
import { Button } from '../ui/Button'
import { TECH_STACK } from '@/constants/tech-stack'

interface FeelProps {
  size?: 'short' | 'large'
  className?: string
}
const Feel = ({ size = 'large', className }: FeelProps) => {
  const socialLinks = [
    { ...TECH_STACK.linkedin, url: 'https://linkedin.com/in/tu-usuario' },
    { ...TECH_STACK.github, url: 'https://github.com/tu-usuario' },
  ]
  return (
    <section
      className={`flex w-full justify-center items-center gap-10 ${className}`}
    >
      {size == 'large' ? <Avatar size='large' /> : <Avatar size='short' />}
      <aside className='max-w-[540]'>
        <header className='flex flex-col gap-1 my-2'>
          <h1 className='title-h1'>Ricardo Erazo</h1>
          <h2 className='title-h2 text-primary drop-shadow-primary'>
            Front End Developer
          </h2>
        </header>
        <footer className='flex flex-col gap-1 my-2'>
          <p className='body-p1'>
            Focused on accessible, human-centric interfaces. <br /> Building
            performance-driven web apps with a UX-first mindset.
          </p>
          <nav className='flex my-6 gap-4 items-center'>
            <Button>Download CV</Button>
            <Button variant='white'>Contact</Button>
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Visit my ${social.name}`}
                className='transition-all duration-300 hover:scale-110'
                style={{ color: 'var(--color-accent)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = social.color)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--color-accent)')
                }
              >
                <social.icon size={32} stroke={1.5} />
              </a>
            ))}
          </nav>
        </footer>
      </aside>
    </section>
  )
}

export default Feel
