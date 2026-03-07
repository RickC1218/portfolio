import React from 'react'
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'white' | 'outline'
  size?: 'xs' | 'md'
  className?: string
  onClick?: () => void
}
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick
}: ButtonProps) => {

  const baseStyles = 'rounded-lg transition-all duration-300 active:scale-95 hover:shadow-[0_8px_25px_0_rgba(0,0,0,0)]';

  const variants = {
    primary: 'bg-primary text-secondary hover:shadow-primary/25',
    white: 'bg-white text-secondary hover:shadow-accent/25',
    outline: 'text-accent title-h3 p-2 hover:underline underline-offset-8'
  }

  const sizes = {
    xs: 'btn-text-xs px-4 py-1',
    md: 'btn-text-md px-6 py-2',
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${variant!== 'outline' && sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}