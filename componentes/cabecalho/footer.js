import styles from './cabecalho.module.css'
import Link from 'next/link';
import { clicker_script } from '@/fonts';
import Image from 'next/image';


function Logo() {
    return(
        <Link href='/' className={styles.logoFooter}>Grão de Café</Link>
    );   
}

function Item({txt1, txt2, txt3, txt4}){
    return(
    <div className={styles.caixaItem}>
        <p className={styles.item}>{txt1}</p>
        <p className={styles.item}>{txt2}</p>
        <p className={styles.item}>{txt3}</p>
        <p className={styles.item}>{txt4}</p>
    </div>
    );
  }

function Titulo({titulo}) {
    return(
            <p className={styles.titulo}>{titulo}</p>
    );
}

export default function Footer() {
    return(
        <div className={styles.caixaFooter}>
            <div className={styles.caixaGeral}>
                <Logo/>
                <p className={styles.textin}>"Bem-vindo à Cafeteira Grão de Café, onde o café se transforma em poesia líquida, 
                    cada xícara é um capítulo de amor e aroma, e cada gole é uma nota suave de felicidade. 
                    Desfrute do despertar encantador desta jornada sensorial. 💖☕️✨"</p>
                <div className={styles.caixaRedes}>
                    <a href={'https://www.facebook.com/'}><Image width={24} height={24} className={styles.redes} src={'/facebook.png'}/></a>
                    <a href={'https://www.instagram.com/'}><Image width={24} height={24} className={styles.redes} src={'/instagram.png'}/></a>
                    <a href={'https://www.youtube.com/'}><Image width={24} height={24} className={styles.redes} src={'/youtube.png'}/></a>
                    <a href={'https://www.twitter.com/'}><Image width={24} height={24} className={styles.redes} src={'/twitter.png'}/></a>
                </div>
            </div>
            <div className={styles.caixaTitulo}>
                <Titulo titulo={'Sobre Nós'}/>
                <Item
                    txt1={'Menu'}
                    txt2={'Características'}
                    txt3={'Blog de Novidades'}
                    txt4={'Ajuda e Suporte'} >
                </Item>
            </div>
            <div className={styles.caixaTitulo}>
                <Titulo titulo={'Empresa'}/>
                <Item
                    txt1={'Como Trabalhamos'}
                    txt2={'Termos de Serviço'}
                    txt3={'Preços'}
                    txt4={'FAQ'} >
                </Item>
                </div>
            <div className={styles.caixaTitulo}>
                <Titulo titulo={'Contato'}/>
                <Item
                    txt1={'Rua Pedro Pierre de Barros, Conjunto Mutirão, Centro, Rio Largo-57100-00, Alagoas'}
                    txt2={'(82) 9 0110-0101'}
                    txt3={'ivrs2@luno.ifal.edu.br'}
                    txt4={'www.graodecafe.com'} >
                </Item>
            </div>
        </div>
    );
}