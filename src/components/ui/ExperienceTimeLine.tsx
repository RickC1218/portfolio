import { IconCode } from '@tabler/icons-react'
interface ExperienceTimeProps {
  type?: 'small' | 'large'
}
export const ExperienceTimeline = ({ type = 'small' }: ExperienceTimeProps) => {
  const dotCount = type === 'small' ? 14 : 17
  return (
    <aside className='flex flex-col items-center justify-center'>
      <div className='flex flex-col text-primary leading-1 mb-1 select-none'>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>

      <div className={`rounded-full bg-primary ${type == 'small' ? 'p-1' : 'p-2'} mt-1`}>
        <IconCode
          className={`text-bg-main ${type == 'small' ? 'w-3 h-3' : 'w-4 h-4'} text-accent`}
          stroke={3}
        />
      </div>

      <div className='grow flex flex-col text-primary leading-1 select-none'>
        <div className='flex flex-col text-primary leading-1'>
          {Array.from({ length: dotCount }).map((_, i) => (
            <span key={'key' + i}>.</span>
          ))}
        </div>
      </div>
    </aside>
  )
}
