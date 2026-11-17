import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact CarIntelCheck | UK Vehicle Check Support',
  description:
    'Contact CarIntelCheck for help with digital vehicle reports for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact CarIntelCheck | Vehicle Check Support',
    description:
      'Call 020 7946 0958 or email info@carintelcheck.com. Visit our London facility at 24 Meridian Way, SW18 4QL. Open Mon–Sat.',
    url: 'https://carintelcheck.com/contact',
    images: ['/opengraph-image?version=carintelcheck-2026-10-29'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
