
import { Button } from '@/components/ui/button';
import { INSTAGRAM_PROFILE, CREATOR_PROFILE } from '@/lib/constants';
import { Heart, Instagram } from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            A special gift for Namish Gohil.
            <br className="md:hidden" />
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
        <div className="flex items-center gap-2">
            <Link href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                    <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    <span className="sr-only">Instagram</span>
                </Button>
            </Link>
            <p className="text-sm text-muted-foreground">@iamnamish17</p>
        </div>
      </div>
    </footer>
  );
}
