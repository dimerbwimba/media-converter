import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import GA from '@/components/GA';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Convertisseur de fichiers illimité gratuit - Transformez vos fichiers facilement en ligne',
  description: `Utilisez notre convertisseur de fichiers illimité gratuit pour transformer divers formats en ligne. 
  Conversion rapide et facile sans limites. 
  Convertissez vos fichiers en toute simplicité!`,
  creator: 'DIMER BWIMBA',
  keywords:
    'convertir pdf en word, convertir youtube mp3, convertir word en pdf, convertir jpg en pdf, convertir pdf en jpg, convertir en pdf, convertir pdf en jpeg, convertir youtube en mp3, convertir mp3, convertir pdf en word gratuit, convertir heic en jpg, convertir pdf en excel, convertir image en pdf, convertir mp4 en mp3, convertir photo en pdf, convertir png en pdf',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GA GA_MEASUREMENT_ID='G-52GQ441X7H' />
      <meta name="google-site-verification" content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU" />
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-2xl lg:max-w-3xl 2xl:max-w-4xl">
          {children}
        </div>
      </body>
    </html>
  );
}
