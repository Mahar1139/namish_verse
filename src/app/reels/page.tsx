
'use client'
import { REELS_DATA, INSTAGRAM_PROFILE } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Video, ExternalLink } from 'lucide-react';
import InstagramEmbedScript from '@/components/shared/instagram-embed-script';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ReelsPage() {
  return (
    <>
      <InstagramEmbedScript />
      <div className="container max-w-6xl py-12 md:py-20 animate-pop-in">
        <header className="text-center mb-8">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight glowing-text">
            His Instagram Reels
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">A glimpse into his artistry in motion.</p>
        </header>

        <div className="text-center mb-12">
            <Link href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="group hover:bg-primary/10 hover:text-primary transition-colors duration-300">
                    Visit Profile to View More
                    <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
            </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REELS_DATA.map((reel: { id: number, embedCode?: string, placeholder?: string }) => (
            <Card key={reel.id} className="overflow-hidden group border-border/50 hover:border-primary/50 transition-all duration-300 aspect-[9/16]">
              <CardContent className="p-0 h-full">
                {reel.embedCode ? (
                  <div 
                    className="w-full h-full [&>blockquote]:h-full [&>blockquote]:w-full" 
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
    </>
  );
}
