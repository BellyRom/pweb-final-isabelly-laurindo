'use client'

import React from 'react';
import './layout'
import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

function Textos() {
  return(
    <div className={styles.caixaTextos}>
      <p className={styles.texto1}>Nós cobrimos sua manhã com um</p>
      <p className={styles.texto2}>Cafézinho</p>
      <p  className={styles.texto3}> 
        Comece o seu dia da melhor maneira possível, 
        saboreando uma xícara do mais refinado café e 
        explorando os incríveis e distintos sabores que oferecemos com muito carinho.
      </p>
    </div>
  )
}

function BotaoPecaAgora() {

  const redirecionar = useRouter();

  return(
    <button onClick={() => redirecionar.push('/menu')} className={styles.botaoPecaAgora}>Peça Agora</button>
  )
}


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.pagina1}>
          <Textos/>
          <BotaoPecaAgora/>
      </div>
    </main>
  )
}
