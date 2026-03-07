import Link from 'next/link'
interface LinkProps {
  href: string
  children: string
}
export const CustomLink = ({ href, children }: LinkProps) => {
  return (
    <Link
      href={href}
      className='text-accent title-h4 transition-all duration-300 ease-in-out hover:underline underline-offset-8 hover:text-primary'
    >
      {children}
    </Link>
  )
}
