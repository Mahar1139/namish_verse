
import { Button } from '@/components/ui/button';
import { INSTAGRAM_PROFILE, CREATOR_PROFILE } from '@/lib/constants';
import { Heart, Instagram } from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="container flex items-center justify-center py-10 md:h-24 md:py-0">
        <div className="text-center text-sm leading-loose text-muted-foreground">
          <p>
            A special gift for{' '}
            <Link
              href={INSTAGRAM_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Namish Gohil
            </Link>
            .
          </p>
          <p>
            <Link
              href={CREATOR_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Created with <Heart className="inline h-4 w-4" /> by Ashish.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
