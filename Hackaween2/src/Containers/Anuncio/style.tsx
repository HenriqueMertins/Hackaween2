import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 100%; /* Ajustado para ocupar toda a largura disponível */
  margin: 20px auto;
`;

// Estilo do cabeçalho
export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-left: 10px;
  }
`;

// Estilo da imagem do logo
export const LogoImg = styled.div`
  img {
    width: 100px;
    height: auto;
  }
`;

// Estilo do container das boxes
export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

// Estilo de cada box
export const Box = styled.div`
  flex: 1;
  max-width: calc(33.333% - 20px); /* Três boxes por linha com espaçamento */
  margin: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: calc(50% - 20px); /* Em telas menores, duas boxes por linha */
  }

  @media (max-width: 480px) {
    max-width: 100%; /* Em telas muito pequenas, uma box por linha */
  }
`;

// Estilo da imagem da box
export const BoxImage = styled.div`
  img {
    width: 100%; /* A imagem agora ocupará toda a largura da box */
    height: auto;
  }
`;

// Estilo do texto da box
export const BoxText = styled.div`
  margin-top: 10px;
`;

// Estilo do título da box
export const BoxTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

// Estilo da descrição da box
export const BoxDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

// Estilo do botão de contato
export const ContactButton = styled.button`
  background-color: #266041;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

// Estilo do botão de registro
export const RegisterButton = styled.button`
  background-color: #266041;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
  margin-top: 10px;

  &:hover {
    background-color: #218838;
  }
`;
