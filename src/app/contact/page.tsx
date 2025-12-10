import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { INSTAGRAM_PROFILE, CREATOR_PROFILE } from '@/lib/constants';
import { Instagram, Mail, MessageSquare, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container flex min-h-[calc(100vh-10rem)] items-center justify-center py-12 md:py-20 animate-pop-in">
      <Card className="w-full max-w-lg text-center border-border/50 shadow-2xl shadow-accent/5">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <MessageSquare className="h-8 w-8 text-accent" />
          </div>
          <CardTitle className="font-headline text-4xl font-bold tracking-tight glowing-text">Connect & Collaborate</CardTitle>
          <CardDescription className="text-lg pt-2">
            Reach out for collaborations, projects, and more.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6 pt-0">
          <div className="text-left bg-card-foreground/5 p-4 rounded-lg">
            <h3 className="font-semibold flex items-center"><Mail className="h-5 w-5 mr-3 text-primary"/>For Namish's Collaborations</h3>
            <p className="text-muted-foreground mt-1">Please send a direct message on Instagram for any work inquiries, collaborations, or event bookings.</p>
             <Link href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="mt-3 group hover:bg-primary/10 hover:text-primary transition-colors duration-300">
                <Instagram className="mr-2 h-4 w-4" />
                @iamnamish17
                </Button>
            </Link>
          </div>
          
          <div className="text-left bg-card-foreground/5 p-4 rounded-lg">
            <h3 className="font-semibold flex items-center"><Briefcase className="h-5 w-5 mr-3 text-accent"/>For Website Projects</h3>
            <p className="text-muted-foreground mt-1">To get a portfolio or project website like this, contact Ashish Mahar on Instagram.</p>
            <Link href={CREATOR_PROFILE} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="mt-3 group hover:bg-accent/10 hover:text-accent transition-colors duration-300">
                    <Instagram className="mr-2 h-4 w-4" />
                    @ashish_mahar._
                </Button>
            </Link>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
