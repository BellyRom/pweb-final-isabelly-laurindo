import './globals.css'
import Header from '../../componentes/cabecalho/header'
import Footer from '../../componentes/cabecalho/footer'
import { playfair_display } from '@/fonts';
import NewsLetter from '../../componentes/newsletter';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
    <title>Grão de Café</title>
      <body className={playfair_display.className}>
        <Header/>
        {children}
        <NewsLetter/>
        <Footer/>
      </body>
    </html>
  )
}
