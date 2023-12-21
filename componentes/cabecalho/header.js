'use client'

import React from 'react';
import styles from './cabecalho.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { clicker_script, playfair_display } from '@/fonts';


function Logo() {
    
    return(
        <Link href='/' className={clsx([styles.logo, clicker_script.className])}>Grão de Café</Link>
    );   
}

function ItemMeio({link, nome}){
    return(
      <Link href={link} className={styles.itemMeio}>{nome}</Link>
    );
  }

function Meio({children}){

    const childrenArray = React.Children.toArray(children);

    return(
      <ul className={styles.meio}>
        {childrenArray.map((itemMeio) => (<li key={itemMeio.props.nome}>{itemMeio}</li>))}
      </ul>
    );
}

function LoginCadastro() {
   
    const redirecionar = useRouter();

    return(
        <div className={styles.loginCadastro}>
            <Link href='/' className={styles.login}>Login</Link>
            <button onClick={() => redirecionar.push('/')} className={clsx([styles.botaoCadastro, playfair_display.className])}>Cadastrar</button>
        </div>
    );
}
  

export default function Header({children}) {
    return(
        <div className={styles.header}>
        <div className={styles.caixaCabecalho}>
            <Logo/>
            <Meio>
                <ItemMeio link={'/'} nome={'Página Inicial'}/>
                <ItemMeio link={'/menu'} nome={'Menu'}/>
                <ItemMeio link={'/sobre-nos'} nome={'Sobre Nós'}/>
                <ItemMeio link={'/contato'} nome={'Contato'}/>
            </Meio>
            <LoginCadastro/>
        {children}
        </div>
        </div>
    );
}