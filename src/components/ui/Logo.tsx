interface LogoProps {
  text: string
  size: 'md' | 'lg'
}

export const Logo = ({ text, size }: LogoProps) => {
  const sizes = {
    md: 'title-h3',
    lg: 'title-h2'
  }
  return (
    <div className={`${sizes[size]} flex items-center gap-1 select-none`}>
      <span className='text-primary font-bold'>&lt;</span>
      <span className='text-white'>{text}</span>
      <span className='text-primary font-bold'> /&gt;</span>
    </div>
  )
}

export default Logo
