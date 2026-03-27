interface LogoProps {
  text: string
  size: 'xs' | 'sm' | 'md' | 'lg'
}

export const Logo = ({ text, size }: LogoProps) => {
  const sizes = {
    xs: ' body-p4',
    sm: ' body-p2',
    md: 'title-h3',
    lg: 'title-h2'
  }
  return (
    <aside className={`${sizes[size]} flex items-center gap-1 select-none`}>
      <span className='text-primary font-bold'>&lt;</span>
      <span className='text-white'>{text}</span>
      <span className='text-primary font-bold'> /&gt;</span>
    </aside>
  )
}

export default Logo
