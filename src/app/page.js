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

/*///////////SEGUNDA PÁGINA/////////////*/


function Textos2() {
  return(
    <div className={styles.caixaTextos2}>
      <p className={styles.texto4}>Descubra o melhor café</p>
      <p className={styles.texto5}>Na Grão de Café, você encontrará mais do que uma simples cafeteria. 
        Oferecemos café de alta qualidade que não apenas impulsiona sua produtividade, mas também eleva o seu ânimo. 
        Desfrutar de uma xícara de café é agradável, mas experimentar uma xícara de café autêntico conosco é uma experiência superior. 
        Não restam dúvidas de que você se encantará com esse café mais do que qualquer outro que já tenha degustado. 
      </p>
    </div>
  )
}

function BotaoSaibaMais() {

  const redirecionar = useRouter();

  return(
    <button onClick={() => redirecionar.push('/sobre-nos')} className={styles.botaoSaibaMais}>Saiba Mais</button>
  )
}

export default function Home() {

  const fundo = {
    background: `linear-gradient(90deg, #1E1E1E -6.88%, rgba(0, 0, 0, 0.00) 87.45%)`
  }

  const foto = {
    width: '100%',
    height: '768px',
    background: `url('/coffee_image.png')  lightgray 50% / cover no-repeat`, 
  };

  return (
    <main className={styles.main}>
      <div className={styles.principal}>
      <div style={fundo}>
      <div className={styles.pagina1} style={foto}>
          <Textos/>
          <BotaoPecaAgora/>
      </div>
      </div>
      <div className={styles.pagina2}>
        <div className={styles.caixaElementos}>
        <Textos2/>
        <BotaoSaibaMais/>
        </div>
        <div className={styles.caixaFoto}>
          <Image src={'/copoCafe.png'} width={680} height={476} alt='Copo feito de grãos de café'/>
        </div>
      </div>
      </div>
    </main>
  )
}
