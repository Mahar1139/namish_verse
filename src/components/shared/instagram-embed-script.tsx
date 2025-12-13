'use client';

import { useEffect } from 'react';

const SCRIPT_URL = 'https://www.instagram.com/embed.js';

export default function InstagramEmbedScript() {
  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${SCRIPT_URL}"]`);

    if (existingScript) {
      // If the script exists, Instagram's embed script might need to be re-run
      // to process any new embeds that have been added to the DOM.
      if (typeof (window as any).instgrm !== 'undefined') {
        (window as any).instgrm.Embeds.process();
      }
      return;
    }

    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.async = true;
    document.body.appendChild(script);

    // The script adds itself to the head, so we can clean up our body tag script
    // The main script will persist, which is fine.
    return () => {
      const addedScript = document.querySelector(`script[src="${SCRIPT_URL}"]`);
      if (addedScript && addedScript.parentElement === document.body) {
         document.body.removeChild(addedScript);
      }
    };
  }, []);

  return null;
}
