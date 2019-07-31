import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import InputSearchHomePage from './SearchHomePage';


const ContainerHomePage = () => (
    <div>
    
    <Container className="container" fluid textAlign="center" >
      <Header style={{marginLeft: '45px'}} as='h1'>Tu alternativa al hospedaje de mascotas</Header>
      <InputSearchHomePage/>
    </Container >
  </div>
)

export default ContainerHomePage