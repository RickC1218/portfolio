import Logo from '../ui/Logo'
import { Divider } from '../ui/Divider'
import { CustomLink as Link } from '../ui/Link'
import { Languages, LayoutPanelLeft, Rows3 } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className='fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50'>
      <div className='bg-bg-card border border-secondary rounded-lg px-8 py-2 flex justify-between items-center'>
        <Logo text='RickDev' size='lg' />
        <div className='hidden md:flex items-center gap-6'>
          <Link href='#projects'>Projects</Link>
          <Divider size={8} />
          <Link href='#skills'>Skills</Link>
          <Divider size={8} />
          <Link href='#experience'>Experience</Link>
          <Divider size={8} />
          <aside className='cursor-pointer bg-bg-main/40 border border-secondary px-3 py-1 rounded-lg flex items-center gap-3 hover:bg-bg-main/60 transition-colors'>
            <Languages className='text-primary w-5 h-5' />
            <span className='text-p4 font-bold text-accent'>EN</span>
          </aside>
          <Divider size={8} />
          <aside className='cursor-pointer bg-bg-main/40 border border-secondary p-1 rounded-lg flex items-center gap-1 hover:border-primary/30 transition-all'>
            <LayoutPanelLeft className='text-muted w-6 h-6 p-1 rounded-sm hover:bg-bg-main/60' />
            <Divider size={4} />
            <Rows3 className='text-primary w-6 h-6 p-1 rounded-sm hover:bg-bg-main/60' />
          </aside>
        </div>
      </div>
    </nav>
  )
}
