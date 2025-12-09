'use client';

import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

type Fanpage = {
    username: string;
    avatar?: { imageUrl: string, imageHint: string };
    reels: (({ imageUrl: string, imageHint: string }) | undefined)[];
    profileUrl: string;
};

interface FanpageCardProps {
  fanpage: Fanpage;
}

const FanpageCard: FC<FanpageCardProps> = ({ fanpage }) => {
  return (
    <Card className="group overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-2">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-16 w-16 border-2 border-transparent group-hover:border-accent transition-colors duration-300">
            {fanpage.avatar && <AvatarImage src={fanpage.avatar.imageUrl} alt={fanpage.username} data-ai-hint={fanpage.avatar.imageHint} />}
            <AvatarFallback>{fanpage.username.charAt(1).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold text-lg font-headline">{fanpage.username}</h3>
            <p className="text-sm text-muted-foreground">Dedicated to supporting Namish</p>
          </div>
        </div>
        
        {/* Reels Grid */}
        <div className="grid grid-cols-3 gap-1 my-4">
            {fanpage.reels.map((reel, index) => (
                <div key={index} className="relative aspect-[3/4] overflow-hidden rounded-md bg-muted">
                    {reel && (
                        <Image
                            src={reel.imageUrl}
                            alt={`Reel preview ${index + 1}`}
                            data-ai-hint={reel.imageHint}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    )}
                </div>
            ))}
        </div>

        {/* View Profile Button */}
        <div className="mt-auto pt-4">
          <Link href={fanpage.profileUrl} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button variant="outline" className="w-full bg-transparent hover:bg-accent hover:text-accent-foreground transition-all duration-300">
              View on Instagram <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default FanpageCard;
