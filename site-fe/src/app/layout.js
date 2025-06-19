import "./globals.css";
import { FrameInit } from "@/components/FrameInit";

export const metadata = {
  title: {
    default: "$VROOM",
    template: "%s — $VROOM"
  },
  description: "a memecoin designed to foster a dynamic automotive content ecosystem.",
  url: "https://vroom.fun", 
  metadataBase: new URL('https://vroom.fun'),
  site_name: "$VROOM", 
  image: {
    url: "/opengraph-image.png",
    type: "image/png", 
    width: 1200, 
    height: 630
  },
  twitter: {
    card: 'summary_large_image',
    title: '%s — $VROOM',
    description: 'a memecoin designed to foster a dynamic automotive content ecosystem.',
    siteId: '',
    creator: '@__chamaquito',
    creatorId: '',
  },
  category: 'automotive',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
          <FrameInit />
        </div>
      </body>
    </html>
  );
}
