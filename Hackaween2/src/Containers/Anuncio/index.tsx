import React from 'react';
import images from '../Img/index'; // Importar as imagens
import {
  Container, Header, ImageContainer, Title, Description, ContactButton
} from './style'; // Importar os estilos

const Announcement = () => {
  return (
    <Container>
      <Header>
        <h1>Detalhes do Anúncio</h1>
      </Header>

 

      <Title>Reflorestamento nas Maldivas</Title>
      <Description>
        Venha fazer parte do nosso projeto de reflorestamento nas Maldivas! Estamos procurando voluntários para ajudar a restaurar a floresta nativa e proteger a vida selvagem.
        Oferecemos hospedagem e alimentação em troca de trabalho.
      </Description>

      <ContactButton>Entre em Contato</ContactButton>
    </Container>
  );
};

export default Announcement;
