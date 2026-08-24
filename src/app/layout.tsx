import type { Metadata } from 'next';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nabin Gurung | Mobile App Developer (Flutter & Android Specialist)',
  description:
    'Personal portfolio of Nabin Gurung — Mobile Application Developer specializing in Flutter, Android, Clean Architecture, BLoC, offline-first apps, and high-performance native integrations.',
  keywords: [
    'Nabin Gurung',
    'Mobile App Developer',
    'Flutter Developer',
    'Android Developer',
    'Kotlin',
    'Dart',
    'BLoC Pattern',
    'Clean Architecture',
    'Kathmandu Nepal',
    'iOS Developer',
    'Mobile Portfolio',
  ],
  authors: [{ name: 'Nabin Gurung', url: 'https://gurungnabin.com.np' }],
  creator: 'Nabin Gurung',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gurungnabin.com.np',
    title: 'Nabin Gurung | Mobile App Developer',
    description:
      'High-impact mobile applications built with Flutter, Clean Architecture, BLoC, and reactive offline-first sync.',
    siteName: 'Nabin Gurung Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nabin Gurung | Mobile App Developer',
    description: 'Flutter & Android Specialist building fluid, 60fps mobile experiences.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-[#050811] text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
