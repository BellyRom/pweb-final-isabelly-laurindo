'use client'

import '../layout'
import Image from 'next/image'
import styles from '../../paginasExtras.module.css'
import clsx from 'clsx';
import { playfair_display } from '@/fonts';

function BotaoPedirAgora() {

  const alerta = () => { alert('Item adicionado ao carinho com sucesso :)')};

  return(
    <button onClick={alerta}  className={clsx([styles.botaoPedirAgora, playfair_display.className])}>Pedir Agora</button>
  )
}

function TituloeSub() {
  return(
    <div className={styles.tituloSub}>
    <p className={styles.titulo}>Desfrute uma nova mistura de estilo de café</p>
    <p className={styles.subtitulo}>Explore todos os sabores de café conosco. Sempre há uma nova xícara que vale a pena experimentar</p>
    </div>
  )
}

function Card({foto, nome}) {
  return(
    <div className={styles.cardGeral}>
      <div >
      <Image src={`/${foto}.png`} width= {280} height= {222}/>
      </div>
      <div className={styles.textsCard}>
        <p className={styles.nomeCard}>{nome}</p>
        <p className={styles.milkCard}>Café 50% | Leite 50%</p>
        <p className={styles.precoCard}>R$ 10.00</p>
      </div>
      <div className={styles.botaoCard}>
        <BotaoPedirAgora/>
      </div>
    </div>
  )
}

export default function Menu() {
  return (
    <main className={styles.main}>
      <div className={styles.paginaMenu}>
        <TituloeSub/>
        <div className={styles.cardHorizontal}>
          <Card foto={'cafe1'} nome = 'Cappuccino'/>
          <Card foto={'cafe2'} nome = 'Chai Latte'/>
          <Card foto={'cafe3'} nome = 'Macchiato'/>
          <Card foto={'cafe4'} nome = 'Expresso'/>
        </div>
      </div>
    </main>
  )
}
