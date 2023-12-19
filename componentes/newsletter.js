'use client'

import React from 'react';
import styles from './cabecalho/cabecalho.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function TextoNews() {
    return(
    <div className={styles.caixaTextoNews}>
        <p className={styles.tituloNews}>Inscreva-se para receber as últimas notícias</p>
        <p className={styles.subtituloNews}>Não perca nossas últimas notícias, atualizações, dicas e ofertas especiais</p>
    </div>
    )
}

export default function NewsLetter() {

    const foto = {
        background: `url('/fundoNews.png'), lightgray 50% / cover no-repeat`,
        width: '100%',
        height: '374px',
    }

    const fundo = {
        width: '100%',
        height: '374px',
        opacity: '0.8',
        background: 'var(--coffee, #603809)',
    }

    return(
        <div style={foto}>
            <div style={fundo} className={styles.fundoNews}>
                <TextoNews />
            </div>
        </div>
    )
    
}