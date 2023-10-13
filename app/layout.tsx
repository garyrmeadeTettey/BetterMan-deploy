import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { dark } from '@clerk/themes';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';
import Footer from '@/components/homepage/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BetterMan',
  description: 'Learn best by quizzing yourself.',
  icons: {
    icon: "/assets/open-book.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    // appearance={{
    //   baseTheme: 
    // }}
    >
      <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen pt-16")}>
      <Providers>
        <Navbar/>
        {children}
      </Providers>
      </body>
    </html>
    </ClerkProvider>
  )
}

const fadeInAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const slideUpAnimation = {
  initial: { y: 100 },
  animate: { y: 0 },
};