import { Inter } from 'next/font/google'
import './globals.css'
import Cabecalho from '@/components/Cabecalho'
import Rodape from '@/components/Rodape'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Próxima luz',
  description: 'Global solution project fiap',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Cabecalho/>
      {children}
      <Rodape/>
      </body>
    </html>
  )
}
