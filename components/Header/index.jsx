import React, { useState } from 'react'
import { Container, Title, NavLinks, Ancora, Content, Menu, CloseSidebar, ContentTitle, SubTitle } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './styles.module.css';

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const { asPath } = useRouter()

  const showSiderbar = () => setSidebar(!sidebar)

  function activeLink(path) {
    return asPath === `/${path}` ? 'active' : ''
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>
            Mateus Dias
          </Title>
          <SubTitle>
            Portfolio Pessoal
          </SubTitle>
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
        <NavLinks sidebar={sidebar}  >
          <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>
          <div className={styles.logo} >
            <Link href="/" passHref>
              <Ancora className={activeLink('')} onClick={showSiderbar}>Home</Ancora>
            </Link>
          </div>
          <div className={styles.logo}>
            <Link href="projects" passHref>
              <Ancora className={activeLink('projects')} onClick={showSiderbar}>Projetos</Ancora>
            </Link>
          </div>
          <div className={styles.logo}>
            <Link href="contact" passHref >
              <Ancora className={activeLink('contact')} onClick={showSiderbar}>Contato</Ancora>
            </Link>
          </div>

          <div className={styles.logo}>
            <Link href="sobre" passHref>
              <Ancora className={activeLink('sobre')} onClick={showSiderbar}>Sobre</Ancora>
            </Link>
          </div>

        </NavLinks>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Content>
    </Container>
  )
}
