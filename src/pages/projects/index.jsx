import React, { useEffect, useState } from 'react'
import { Container, Content, Ul, Li, TitleProject, Url, Created_at } from './style'
import { FaGithub } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'


export default function Projects() {
  const [itemsApi, setItemsApi] = useState([])

  useEffect(() => {
    let abortController = new AbortController(); 

    function getGitHubAPI() {
      fetch('https://api.github.com/users/mateus00dias/repos')
      .then(async res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        var data = await res.json()
        setItemsApi(data)
      })
      .catch(e => console.log(e))
    }

    getGitHubAPI()

    return () => abortController.abort();  
  }, [])

  return (
    <Container>
     <Content>
       <Ul>
        <h1>PROJETOS</h1>
        {itemsApi.map(item => (
          <Li key={item.id}>
            <TitleProject>{item.name.toUpperCase()}</TitleProject>
            <Url>URL: {item.url}</Url>
            <Created_at>Data Criação: { Intl.DateTimeFormat('pt-BR')
              .format(new Date(item.created_at))}
            </Created_at>
            <a href="https://github.com/mateus00dias" target="_blank">
              <ItemContact
                IconFa={FaGithub}
                LinkContact="Github"
              />
            </a>
          </Li>
        ))}
       </Ul>
     </Content>
   </Container>
  )
}