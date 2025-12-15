import type { Metadata } from 'next';
import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/shared/header';
import { SiteFooter } from '@/components/shared/footer';
import { Toaster } from "@/components/ui/toaster";
import { BottomNav } from '@/components/shared/bottom-nav';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-headline',
});

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: "Namish Gohil | Namish Verse – Dancer & Choreographer",
  description: 'Namish Verse is the official portfolio of Namish Gohil, a professional dancer and choreographer. Explore his reels, fanpages and artistic journey.',
  keywords: ['Namish', 'Namish Gohil', 'Namish Verse', 'Namish dancer', 'Namish choreographer'],
  openGraph: {
    title: 'Namish Verse – Official Portfolio of Namish Gohil',
    description: 'Explore the world of Namish Gohil, dancer & choreographer.',
    type: 'website',
    images: ['/nammu_pics/pf_p.jpg'],
  },
  icons: {
    icon: '/nammu_pics/2.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontPoppins.variable,
          fontInter.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col">
          <SiteHeader />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <BottomNav />
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
