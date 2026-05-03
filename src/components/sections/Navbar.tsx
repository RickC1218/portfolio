import Logo from '../ui/Logo'
import { Divider } from '../ui/Divider'
import { CustomLink } from '../ui/Link'
import Link from 'next/link'

import {
  IconLayoutBoardFilled,
  IconLanguage,
  IconLayoutListFilled,
} from '@tabler/icons-react'

export const Navbar = () => {
  return (
    <nav className='fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50'>
      <div className='bg-bg-card/70 backdrop-blur-md border border-secondary/50 rounded-2xl px-6 py-2 flex justify-between items-center shadow-lg'>
        <Link href='#hero'>
          <Logo text='RickDev' size='lg' />
        </Link>
        <div className='hidden md:flex items-center gap-6'>
          <CustomLink href='#projects'>Projects</CustomLink>
          <Divider size={8} />
          <CustomLink href='#skills'>Skills</CustomLink>
          <Divider size={8} />
          <CustomLink href='#experience'>Experience</CustomLink>
          <Divider size={8} />
          <button className='cursor-pointer bg-bg-main/40 border border-secondary px-3 py-1 rounded-lg flex items-center gap-3 hover:bg-bg-main/60 transition-colors'>
            <IconLanguage stroke={1.75} className='text-primary w-5 h-5' />
            <span className='text-p4 font-bold text-accent'>EN</span>
          </button>
          <Divider size={8} />
          <button className='cursor-pointer bg-bg-main/40 border border-secondary p-1 rounded-lg flex items-center gap-1 hover:border-primary/30 transition-all'>
            <IconLayoutBoardFilled className='text-muted hover:text-accent transition-colors w-6 h-6 p-1 rounded-sm hover:bg-bg-main/60' />
            <Divider size={4} />
            <IconLayoutListFilled className='text-primary hover:text-muted transition-colors w-6 h-6 p-1 rounded-sm hover:bg-bg-main/60' />
          </button>
        </div>
      </div>
    </nav>
  )
}
