'use client';

import {
  Home,
  Info,
  Users,
  Instagram,
  Mail,
  Gift,
  Heart,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, CREATOR_PROFILE, INSTAGRAM_PROFILE } from '@/lib/constants';
import { cn } from '@/lib/utils';

const getIconForLink = (href: string) => {
  switch (href) {
    case '/':
      return <Home className="h-5 w-5" />;
    case '/about':
      return <Info className="h-5 w-5" />;
    case '/fanpages':
      return <Users className="h-5 w-5" />;
    case '/reels':
      return <Instagram className="h-5 w-5" />;
    case '/contact':
      return <Mail className="h-5 w-5" />;
    case '/gift':
      return <Gift className="h-5 w-5" />;
    default:
      return <div className="h-5 w-5" />;
  }
};

export function SiteFooter() {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Footer Navbar */}
      <footer className="sticky bottom-0 z-50 w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
        <nav className="container flex h-16 items-center justify-around">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex flex-col items-center gap-1 p-2 transition-colors',
                pathname === link.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              {getIconForLink(link.href)}
              <span className="text-xs font-medium">{link.label}</span>
            </Link>
          ))}
        </nav>
      </footer>

      {/* Desktop Footer */}
      <footer className="hidden w-full border-t border-border/40 bg-background/95 md:block">
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
    </>
  );
}