import { Analytics } from '@vercel/analytics/react'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import { Inter } from '@next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

import '../styles/tailwind.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      <Analytics />
    </>
  )
}
