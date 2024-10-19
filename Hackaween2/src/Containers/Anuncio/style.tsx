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