
'use client';

import fanpagesData from '@/lib/fanpages-data.json';
import FanpageCard from '@/components/fanpages/fanpage-card';
import InstagramEmbedScript from '@/components/shared/instagram-embed-script';
import { Button } from '@/components/ui/button';
import { INSTAGRAM_PROFILE } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function FanpagesPage() {
  return (
    <>
      <InstagramEmbedScript />
      <div className="container max-w-6xl py-12 md:py-20 animate-pop-in">
        <header className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight glowing-text">
            Love From His Fans
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">A tribute to the community he inspires.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fanpagesData.map((fanpage, index) => (
            <FanpageCard key={index} fanpage={fanpage} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="group hover:bg-primary/10 hover:text-primary transition-colors duration-300">
              View More Fanpages
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
