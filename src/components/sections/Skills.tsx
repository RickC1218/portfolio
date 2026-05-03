import Logo from '../ui/Logo'
import Slider from '../ui/Slider'

const Skills = () => {
  return (
    <section className='flex flex-col gap-10'>
      <Logo text='Skills' size='md' />
      <div className='flex w-full justify-center'>
        <Slider />
      </div>
    </section>
  )
}

export default Skills
