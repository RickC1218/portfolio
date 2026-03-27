import Image from 'next/image'
import avatarImage from '@/assets/unnamed.jpg'

interface AvatarProps {
  size?: 'short' | 'large'
  className?: string
}
const Avatar = ({ size = 'short', className }: AvatarProps) => {
  const sizes = {
    short: ' w-[151px]',
    large: 'w-[343px]',
  }
  return (
    <Image src={avatarImage}  alt='Avatar Rick' className={`rounded-full ${className} ${sizes[size]}`} />
  )
}

export default Avatar
