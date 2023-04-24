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
            <Link href="/">
              <Ancora className={activeLink('')} onClick={showSiderbar}>Home</Ancora>
            </Link>
          </div>
          <div className={styles.logo}>
            <Link href="projects">
              <Ancora className={activeLink('projects')} onClick={showSiderbar}>Projetos</Ancora>
            </Link>
          </div>
          <div className={styles.logo}>
            <Link href="contact">
              <Ancora className={activeLink('contact')} onClick={showSiderbar}>Contato</Ancora>
            </Link>
          </div>
        </NavLinks>
      </Content>
    </Container>
  )
}
