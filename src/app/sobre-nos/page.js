'use client'

import '../layout'
import Image from 'next/image'
import styles from '../../paginasExtras.module.css'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { playfair_display } from '@/fonts';


function TituloeSub() {
  return(
    <div className={styles.tituloSub}>
    <p className={styles.titulo}>Por que nós somos diferentes?</p>
    <p className={styles.subtitulo}>Nós não fazemos apenas o seu café, fazemos o seu dia!</p>
    </div>
  )
}

function Card({foto, titulo, subtitulo}) {
  return(
    <div className={styles.caixaCard}>
      <div className={styles.fotoCard}>
      <Image src={`/${foto}.png`} width= {88} height= {88} className={styles.fotoCard}/>
      </div>
      <div className={styles.textCard}>
        <p className={styles.tituloCard}>{titulo}</p>
        <p className={styles.subtituloCard}>{subtitulo}</p>
      </div>
    </div>
  )
}

function BotaoSejunte() {

  const redirecionar = useRouter();

  return(
    <button onClick={() => redirecionar.push('/menu')} className={clsx([styles.botaoSeJunte, playfair_display.className])}>Junte-se a Nós</button>
  )
}

function Fim() {
  return(
    <div className={styles.caixaFim}>
      < div>
      <p className={styles.text1}>Ideias maravilhosas começam com um maravilhoso café. Vamos te ajudar a alcançar isso</p>
      <p className={styles.text2}>Começando hoje.</p>
      </div>
      <div>
      <BotaoSejunte/>
      </div>
    </div>
  )  
}

export default function SobreNos() {
  return (
    <main className={styles.main}>
      <div className={styles.paginaSobreNos}>
        <TituloeSub/>
        <div className={styles.cardHorizontal}>
          <Card foto={'icon1'} titulo = 'Grãos Supremos' subtitulo='Grãos que fornecem um ótimo sabor'/>
          <Card foto={'icon2'} titulo = 'Alta Qualidade' subtitulo='Nós fornecemos a melhor qualidade'/>
          <Card foto={'icon3'} titulo = 'Extraordinário' subtitulo='Café como você nunca provou'/>
          <Card foto={'icon4'} titulo = 'Preço Acessível' subtitulo='Nossos preços de café são acessíveis'/>
        </div>
        <Fim/>
      </div>
    </main>
  )
}
