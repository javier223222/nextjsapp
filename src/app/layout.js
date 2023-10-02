import './globals.css'
import { DM_Sans } from 'next/font/google'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'MUBI',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}