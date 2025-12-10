
'use client'
import { REELS_DATA } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Video } from 'lucide-react';

export default function ReelsPage() {
  return (
    <div className="container max-w-6xl py-12 md:py-20 animate-pop-in">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight glowing-text">
          His Instagram Reels
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">A glimpse into his artistry in motion.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {REELS_DATA.map((reel) => (
          <Card key={reel.id} className="overflow-hidden group border-border/50 hover:border-primary/50 transition-all duration-300 aspect-[9/16]">
            <CardContent className="p-0 h-full">
              {reel.embedCode ? (
                <div 
                  className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full scale-105" 
                  dangerouslySetInnerHTML={{ __html: reel.embedCode }} 
                />
              ) : (
                <div className="w-full h-full bg-card flex flex-col items-center justify-center text-center p-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4 border-2 border-dashed group-hover:border-primary transition-all duration-300">
                    <Video className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-all duration-300" />
                  </div>
                  <h3 className="font-headline font-semibold text-lg">{reel.placeholder}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    An Instagram reel will be embedded here.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                      <Instagram className="h-4 w-4" />
                      <span>@iamnamish17</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
