import { Divider } from '../ui/Divider'
import { Copyright, Github, Linkedin } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full py-6 border-t border-secondary'>
      <div className='w-[90%] px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='flex items-center md:items-start gap-2'>
          <Copyright className='text-muted w-5 h-5' />
          <p className='body-p3 text-muted'>
            {currentYear} Ricardo Erazo. Built with React and Tailwind.
          </p>
        </div>

        <div className='md:hidden'>
          <Divider size={10} type='horizontal' />
        </div>

        <div className='flex items-center gap-4'>
          <a
            href='https://github.com/'
            target='_blank'
            className='text-muted hover:text-primary transition-colors'
          >
            <Github className='text-muted w-5 h-5' />
          </a>
          <a
            href='https://linkedin.com/'
            target='_blank'
            className='text-muted hover:text-primary transition-colors'
          >
            <Linkedin className='text-muted w-5 h-5' />
          </a>
        </div>
      </div>
    </footer>
  )
}
