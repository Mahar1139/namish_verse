import HeartIcon from '@/components/gift/heart-icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CREATOR_PROFILE } from '@/lib/constants';
import { Gift, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function GiftPage() {
  return (
    <div className="container flex min-h-[calc(100vh-10rem)] items-center justify-center py-12 md:py-20 animate-pop-in">
      <div className="relative w-full max-w-2xl text-center">
        <Card className="border-border/50 shadow-2xl shadow-primary/10">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Gift className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-4xl font-bold tracking-tight glowing-text">A Gift For You, Namish</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-8">
            <p className="text-lg text-foreground/90 leading-relaxed">
              “This website is created with love, respect and admiration for your art.
              Your passion inspires people more than you know.”
            </p>
            <div className="border-t pt-6">
                <CardDescription className="mb-4">From your supporter,</CardDescription>
                <Link href={CREATOR_PROFILE} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="group hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                    <Instagram className="mr-2 h-4 w-4" />
                    @ashish_mahar._
                </Button>
                </Link>
            </div>
          </CardContent>
        </Card>
        
        <div className="absolute -bottom-8 -right-8">
          <HeartIcon />
        </div>
      </div>
    </div>
  );
}
