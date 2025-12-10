
import { PlaceHolderImages } from './placeholder-images';
import { Home, Info, Users, Video, Mail, Gift } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  { href: '/fanpages', label: 'Fanpages', icon: Users },
  { href: '/reels', label: 'Reels', icon: Video },
  { href: '/contact', label: 'Contact', icon: Mail },
  { href: '/gift', label: 'A Gift', icon: Gift },
];

export const INSTAGRAM_PROFILE = 'https://www.instagram.com/iamnamish17';
export const CREATOR_PROFILE = 'https://www.instagram.com/ashish_mahar._';

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const FANPAGES_DATA = [
    {
        username: '@namish_gohil_fans',
        avatar: findImage('fan_avatar_1'),
        reels: [
            findImage('fan_reel_1_1'),
            findImage('fan_reel_1_2'),
            findImage('fan_reel_1_3'),
        ],
        profileUrl: 'https://www.instagram.com/namish_gohil_fans',
    },
    {
        username: '@gohil_namish_fp',
        avatar: findImage('fan_avatar_2'),
        reels: [
            findImage('fan_reel_2_1'),
            findImage('fan_reel_2_2'),
            findImage('fan_reel_2_3'),
        ],
        profileUrl: 'https://www.instagram.com/gohil_namish_fp',
    },
    {
        username: '@namish.universe',
        avatar: findImage('fan_avatar_3'),
        reels: [
            findImage('fan_reel_3_1'),
            findImage('fan_reel_3_2'),
            findImage('fan_reel_3_3'),
        ],
        profileUrl: 'https://www.instagram.com/namish.universe',
    },
];

export const REELS_DATA = [
  { 
    id: 1, 
    placeholder: 'Reel 1 Embed - Replace with your embed code'
  },
  { 
    id: 2, 
    placeholder: 'Reel 2 Embed - Replace with your embed code'
  },
  { 
    id: 3, 
    placeholder: 'Reel 3 Embed - Replace with your embed code' 
  },
  { 
    id: 4, 
    placeholder: 'Reel 4 Embed - Replace with your embed code' 
  },
  { 
    id: 5, 
    placeholder: 'Reel 5 Embed - Replace with your embed code'
  },
  { 
    id: 6, 
    placeholder: 'Reel 6 Embed - Replace with your embed code'
  },
];
