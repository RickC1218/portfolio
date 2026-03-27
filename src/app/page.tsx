import ProjectCard from '@/components/cards/ProjectCard';
import { Navbar } from '@/components/sections/Navbar';

export default function Home() {
  return (
    <main className='min-h-screen max-w-7xl mx-auto px-6 py-10 flex flex-col gap-12'>
      <Navbar />
      <div className='mt-24 flex flex-col gap-3'>
        <ProjectCard type='large' />
        <ProjectCard type='small' />
      </div>
    </main>
  );
}
