import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <div className="absolute inset-0 bg-light-motion z-0"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        
        <div className="animate-subtle-float space-y-8">
            <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl shadow-primary/20 border-4 border-primary/20">
                <Image
                src="/nammu_pics/pf_p.jpg"
                alt="Portrait of Namish Gohil"
                data-ai-hint="male dancer"
                fill
                className="object-cover"
                />
            </div>
          <div>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter glowing-text">
              Namish Gohil – Dancer & Choreographer
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium">
              Namish Verse is a creative portfolio dedicated to Namish Gohil.
            </p>
          </div>
        </div>
        <Link href="/about" className="mt-12">
          <Button
            size="lg"
            className="group rounded-full bg-primary/10 text-primary-foreground transition-all duration-300 hover:bg-primary/20 hover:shadow-[0_0_20px_theme(colors.primary/0.5)]"
          >
            Explore Nammu's World
            <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
