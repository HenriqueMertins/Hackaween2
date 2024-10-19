import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
`;

// Estilo do cabeçalho
export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 2.5rem; /* Tamanho do título */
    color: #333; /* Cor do título */
    margin-left: 10px; /* Espaçamento entre logo e título */
  }
`;

// Estilo da imagem do logo
export const LogoImg = styled.div`
  img {
    width: 100px; /* Largura do logo */
    height: auto; /* Mantém a proporção da imagem */
  }
`;

// Estilo do container das boxes
export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px; // Espaçamento entre fileiras
`;

// Estilo da box
export const Box = styled.div`
  flex: 1; // Cada box ocupa o mesmo espaço
  margin: 0 10px; // Margem lateral entre as boxes
  background-color: #fff; // Cor de fundo das boxes
  border-radius: 8px; // Bordas arredondadas
  padding: 15px; // Espaçamento interno
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); // Sombra
`;

// Estilo da imagem da box
export const BoxImage = styled.div`
  img {
    width: 100%; // Imagem ocupa toda a largura
    height: auto; // Mantém a proporção
  }
`;

// Estilo do texto da box
export const BoxText = styled.div`
  margin-top: 10px; // Espaçamento acima do texto
`;

// Estilo do título da box
export const BoxTitle = styled.h3`
  font-size: 1.5rem; // Tamanho do título
  color: #333; // Cor do título
`;

// Estilo da descrição da box
export const BoxDescription = styled.p`
  font-size: 1rem; // Tamanho da descrição
  color: #666; // Cor da descrição
`;

// Estilo do botão de contato
export const ContactButton = styled.button`
  background-color: #007bff; // Cor de fundo do botão
  color: white; // Cor do texto
  border: none; // Sem borda
  padding: 10px 15px; // Espaçamento interno
  border-radius: 5px; // Bordas arredondadas
  cursor: pointer; // Cursor de ponteiro
  margin-top: 10px; // Espaçamento acima do botão

  &:hover {
    background-color: #0056b3; // Cor do botão ao passar o mouse
  }
`;
