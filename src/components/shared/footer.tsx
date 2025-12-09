
import { INSTAGRAM_PROFILE, CREATOR_PROFILE } from '@/lib/constants';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="sticky bottom-0 w-full border-t border-border/40 bg-background/95">
      <div className="container flex items-center justify-center py-4 md:h-16 md:py-0">
        <div className="text-center text-sm text-muted-foreground">
          <p>
            A special gift for{' '}
            <Link
              href={INSTAGRAM_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Nammu
            </Link>
            . Created with <Heart className="inline h-4 w-4" /> by{' '}
            <Link
              href={CREATOR_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Ashish.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
