import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaWhatsapp, FaGithub } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'


export default function Contact() {
  return (
    <Container>
      <Content>
        <a href="https://www.linkedin.com/in/mateus-felipe-dias-b5014b1a1/" target="_blank" rel="noopener">
          <ItemContact
            IconFa={FaLinkedin}
            LinkContact="Linkedin"
          />
        </a>

        <a href="https://www.facebook.com/mateus.diistackki"target ="_blank" rel="noopener">
          <ItemContact
            IconFa={FaFacebook}
            LinkContact="Facebook"
          />
        </a>

        <a href="https://www.instagram.com/mateus00dias/"target ="_blank" rel="noopener">
          <ItemContact
            IconFa={FaInstagram}
            LinkContact="Instagram"
          />
        </a>

        <a href="">
          <ItemContact
            IconFa={FaEnvelope}
            LinkContact="mfdprofissional@gmail..com"
          />
        </a>

        <a href="https://github.com/mateus00dias" target="_blank" rel="noopener">
          <ItemContact
            IconFa={FaGithub}
            LinkContact="Github"
          />
        </a>

        <a href="https://wa.me/33998066207" target="_blank" rel="noopener">
          <ItemContact
            IconFa={FaWhatsapp}
            LinkContact="Whatsapp"
          />
        </a>
      </Content>
    </Container>
  )
}
