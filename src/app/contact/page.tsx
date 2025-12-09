import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { INSTAGRAM_PROFILE } from '@/lib/constants';
import { Instagram, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container flex min-h-[calc(100vh-10rem)] items-center justify-center py-12 md:py-20 animate-pop-in">
      <Card className="w-full max-w-lg text-center border-border/50 shadow-2xl shadow-accent/5">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <MessageSquare className="h-8 w-8 text-accent" />
          </div>
          <CardTitle className="font-headline text-4xl font-bold tracking-tight glowing-text">Connect with Namish</CardTitle>
          <CardDescription className="text-lg pt-2">
            Follow his journey and reach out for collaborations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6 pt-0">
          <div className="text-left bg-card-foreground/5 p-4 rounded-lg">
            <h3 className="font-semibold flex items-center"><Mail className="h-5 w-5 mr-3 text-primary"/>For Collaborations</h3>
            <p className="text-muted-foreground mt-1">Please send a direct message on Instagram for any work inquiries, collaborations, or event bookings.</p>
          </div>
          <Link href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full group bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:shadow-lg hover:shadow-pink-500/30 transition-shadow duration-300">
              <Instagram className="mr-2 h-5 w-5" />
              Follow @iamnamish17
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
