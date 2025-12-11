
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about_image');
  const achievements = [
    'Top 6 at Super dancer season 5',
    '226k + insta family',
    '23k+ youtube family',
  ];

  return (
    <div className="container max-w-5xl py-12 md:py-20 animate-pop-in">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight glowing-text">
          About Namish
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">His Journey, His Passion</p>
      </header>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-lg text-foreground/90">
          <p>
            Namish Gohil isn't just a dancer; he is a storyteller who uses movement to paint vivid emotional landscapes. From a young age, his life has been a rhythm, a continuous flow of passion and dedication to the art of dance.
          </p>
          <p>
            His unique style blends contemporary forms with classical roots, creating a visual poetry that captivates and inspires audiences worldwide. For Namish, dance is more than a profession—it's the language of his soul.
          </p>
          <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 italic text-xl font-medium bg-primary/10 rounded-r-lg">
            "Dance is the poetry of the body."
          </blockquote>
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
          {aboutImage && (
            <Image 
              src={aboutImage.imageUrl} 
              alt={aboutImage.description}
              data-ai-hint={aboutImage.imageHint}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          )}
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-transparent hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                <p className="font-medium text-foreground/90">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
