'use client';

import { Heart } from 'lucide-react';
import Link from 'next/link';
import { CREATOR_PROFILE, INSTAGRAM_PROFILE } from '@/lib/constants';

export function SiteFooter() {
  return (
    <footer className="sticky bottom-0 w-full border-t border-border/40 bg-background/95">
      <div className="container flex h-16 items-center justify-center">
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
