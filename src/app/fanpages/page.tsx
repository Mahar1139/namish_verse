'use client';

import { useEffect } from 'react';
import fanpagesData from '@/lib/fanpages-data.json';
import FanpageCard from '@/components/fanpages/fanpage-card';

export default function FanpagesPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
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
    </div>
  );
}
