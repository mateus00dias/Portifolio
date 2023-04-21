import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Mateus Dias</Name>
        <Function>Aprendendo</Function>
        <Intro>Graduando em Sistemas de Informação, 
          Já tive experiência em desenvolvimento Web, mobile com os framework
          React,React Native e com as Linguagens (Java, C, C++, C#, R, MySql, JS e outros).
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/fotoi.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
