import React from 'react'
import { Container, Content } from './style'
import styles from './styles.module.css';


export default function Sobre() {
  return (
    <Container>
      <Content>
        <h1 className={styles.titulo}>REFERÊNCIA</h1>
        <footer className = {styles.referencia}>
                <span className={styles.author}> Baseado no vídeo criado por Will Dev <br/><br /><a href="https://www.youtube.com/watch?v=SycqjRYnCSE&t=128s&ab_channel=WillDev" target = "_blank" rel = "noreferrer"className={styles.author}><ins>Criando Site de Portfólio Pessoal com NEXT.JS! 🔥 (React.JS, Styled Components, API)</ins></a></span>
        </footer>
      </Content>
    </Container>
  )
}