interface DividerProps {
  size?: number
  type?: 'horizontal' | 'vertical'
  color?: string
}

export const Divider = ({ size = 6, type = 'vertical', color = 'muted' }: DividerProps) => {
  const sizeClass = type === 'vertical' ? `h-${size}` : `w-${size}`
  const baseClasses = type === 'vertical' ? 'w-px' : 'h-px'
  const colorClass = `bg-${color}`

  return <div className={`${baseClasses} ${sizeClass} ${colorClass}`} />
}
