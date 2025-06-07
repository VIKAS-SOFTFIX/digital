import '../styles/globals.scss'
import { Inter } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const dmSans = DM_Sans({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Maxdi - Creative Agency React Next.js Template',
  description: 'A creative agency template built with React and Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
