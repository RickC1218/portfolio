import { techStackArray } from '@/constants/tech-stack';

const Slider = () => {
  const frontendTech = techStackArray.filter(t => t.category === 'frontend');
  const duplicatedItems = [...frontendTech, ...frontendTech];

  return (
    <div className='group overflow-hidden flex w-[90%]'>
      <div className='flex animate-scroll group-hover:[animation-play-state:paused]'>
        {duplicatedItems.map((tech, index) => (
          <div key={`${tech.id}-${index}`} className='px-10 flex flex-col items-center gap-2 transition-transform hover:scale-110'>
            <tech.icon
              size={50}
              style={{ color: tech.color }}
              className='filter drop-shadow-sm'
              stroke={1.5}
            />
            <span className='body-p4 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity'>
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;