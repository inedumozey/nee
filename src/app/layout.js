import { Roboto } from 'next/font/google'
import './globals.css'
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:12256/api/v1';
// axios.defaults.baseURL = 'https://nee-server.onrender.com/api/v1';

axios.defaults.withCredentials = false;

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"] })

export const metadata = {
  title: 'Mama',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
