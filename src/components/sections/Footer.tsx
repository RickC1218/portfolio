import { Divider } from '../ui/Divider'
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconCopyrightFilled,
} from '@tabler/icons-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full py-6 border-t border-secondary'>
      <div className='w-[90%] px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
        <section className='flex items-center md:items-start gap-2'>
          <IconCopyrightFilled className='text-muted w-5 h-5' />
          <p className='body-p3 text-muted'>
            {currentYear} Ricardo Erazo. Built with React and Tailwind.
          </p>
        </section>

        <div className='md:hidden'>
          <Divider size={10} type='horizontal' />
        </div>

        <nav className='flex items-center gap-4'>
          <a
            href='https://github.com/'
            target='_blank'
            className='text-muted hover:text-primary transition-colors'
          >
            <IconBrandGithubFilled className='text-muted w-5 h-5' />
          </a>
          <a
            href='https://linkedin.com/'
            target='_blank'
            className='text-muted hover:text-primary transition-colors'
          >
            <IconBrandLinkedinFilled className='text-muted w-5 h-5' />
          </a>
        </nav>
      </div>
    </footer>
  )
}
