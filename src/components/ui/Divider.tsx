interface DividerProps {
  size?: 4 | 6 | 8 | 10
  type?: 'horizontal' | 'vertical'
  color?: 'muted' | 'secondary' | 'primary' | 'white/10'
}

export const Divider = ({
  size = 6,
  type = 'vertical',
  color = 'muted',
}: DividerProps) => {
  const heights = {
    4: 'h-4',
    6: 'h-6',
    8: 'h-8',
    10: 'h-10',
  }

  const widths = {
    4: 'w-4',
    6: 'w-6',
    8: 'w-8',
    10: 'w-10',
  }

  const colors = {
    muted: 'bg-muted',
    secondary: 'bg-secondary',
    primary: 'bg-primary',
    'white/10': 'bg-white/10',
  }

  const sizeClass = type === 'vertical' ? heights[size] : widths[size]
  const baseClasses = type === 'vertical' ? 'w-[1px]' : 'h-[1px]'
  const colorClass = colors[color]

  return <div className={`${baseClasses} ${sizeClass} ${colorClass}`} />
}
