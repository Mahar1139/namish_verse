import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative h-[calc(100vh-8rem)] w-full overflow-hidden">
      <div className="absolute inset-0 bg-light-motion z-0"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <div className="animate-subtle-float">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter glowing-text">
            Namish Gohil
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium">
            Dancer &bull; Choreographer &bull; Artist
          </p>
        </div>
        <Link href="/about" className="mt-12">
          <Button
            size="lg"
            className="group rounded-full bg-primary/10 text-primary-foreground transition-all duration-300 hover:bg-primary/20 hover:shadow-[0_0_20px_theme(colors.primary/0.5)]"
          >
            Explore His World
            <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
