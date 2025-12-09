
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import { ScrollArea } from '@/components/ui/scroll-area';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-auto flex items-center space-x-2">
          <span className="font-bold font-headline">Namish Verse</span>
        </Link>

        {/* Desktop and Mobile Navigation */}
        <ScrollArea className="w-full max-w-lg md:max-w-none whitespace-nowrap">
            <nav className="flex w-full justify-end gap-4 text-sm font-medium">
            {NAV_LINKS.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className={cn(
                    'transition-colors hover:text-primary px-2 py-1 rounded-md',
                    pathname === link.href ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                )}
                >
                {link.label}
                </Link>
            ))}
            </nav>
        </ScrollArea>

      </div>
    </header>
  );
}
