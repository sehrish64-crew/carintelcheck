import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About CarIntelCheck — Digital Vehicle Reports',
  description:
    'Learn about CarIntelCheck digital reports for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes. No physical inspections.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About CarIntelCheck — UK Digital Vehicle Reports',
    description:
      '100% digital vehicle analysis and reports across the UK, with no physical inspection required.',
    url: 'https://carintelcheck.com/about',
    images: ['/opengraph-image?version=carintelcheck-2026-10-29'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
