import Logo from '../ui/Logo'
import { Divider } from '../ui/Divider'
import { CustomLink as Link } from '../ui/Link'
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import AutoAwesomeMosaicRoundedIcon from '@mui/icons-material/AutoAwesomeMosaicRounded';
import ViewDayRoundedIcon from '@mui/icons-material/ViewDayRounded';

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
          <aside className='bg-bg-main/40 border border-white/5 px-3 py-1 rounded-lg flex items-center gap-2 hover:bg-bg-main/60 transition-colors'>
            <TranslateRoundedIcon color='primary' fontSize='medium'/>
            <span className='text-p4 font-bold text-accent'>EN</span>
          </aside>
          <Divider size={8} />
          <aside className='bg-bg-main/40 border border-white/5 p-2 rounded-lg flex hover:border-primary/30 transition-all'>
              <AutoAwesomeMosaicRoundedIcon color='primary' fontSize='medium'/>
              <Divider size={6} />
              <ViewDayRoundedIcon color='primary' fontSize='medium'/>
          </aside>
        </div>
      </div>
    </nav>
  )
}
