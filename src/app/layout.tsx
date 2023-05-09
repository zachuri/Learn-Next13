import './globals.css';
import { Inter } from 'next/font/google';
import SupabaseProvider from '../components/supabase-provider';
import Navbar from '@/components/navbar';
import { Suspense } from 'react';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <Suspense fallback={<Loading />}></Suspense>
          <Navbar />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
