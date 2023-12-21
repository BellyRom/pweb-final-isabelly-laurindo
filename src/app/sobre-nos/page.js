import '../layout'
import Image from 'next/image'
import styles from '../page.module.css'


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
      <Image src={`/${foto}.png`} width= {88} height= {88} className={styles.fotoCard}/>
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

export default function SobreNos() {
  return (
    <main className={styles.main}>
      
    </main>
  )
}
