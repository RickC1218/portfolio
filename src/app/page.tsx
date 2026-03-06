import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 py-10 flex flex-col gap-12">
      <div>
        <Button size='md'>
          Download CV
        </Button>
        <Button variant='white'>
          Contact me
        </Button>
        <Button variant='outline'>
          Projects
        </Button>
        <Button size='xs'>
          Boton 2 blue
        </Button>
        <Button variant='white' size='xs'>
          Boton 2 white
        </Button>
      </div>
    </main>
  );
}
