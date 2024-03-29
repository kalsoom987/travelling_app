import { Inter } from 'next/font/google'
import './globals.css'
import MoveToTop from '@/components/shared/MoveToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Travel App',
  description: 'Explore World with great enjoyments.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <MoveToTop />
      </body>
    </html>
  )
}
