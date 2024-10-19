import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px; /* Largura máxima da página de contato */
  margin: 20px auto;
`;

// Estilo do cabeçalho
export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 2rem;
    color: #333;
    margin-left: 10px;
  }
`;

// Estilo da imagem do logo
export const LogoImg = styled.div`
  img {
    width: 300px;
    height: auto;
  }
`;

// Estilo para as informações de contato
export const ContactInfo = styled.div`
  h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #333;
  }
`;

// Estilo de cada campo de informação
export const InfoField = styled.div`
  margin-bottom: 15px; /* Espaçamento entre os campos */
`;

// Estilo do rótulo
export const InfoLabel = styled.span`
  display: block;
  font-size: 1rem;
  color: #333;
  font-weight: bold; /* Negrito para o rótulo */
`;

// Estilo do valor da informação
export const InfoValue = styled.span`
  font-size: 1rem;
  color: #666; /* Cor do valor */
  
  a {
    color: #266041; /* Cor dos links */
    text-decoration: none; /* Remove o sublinhado dos links */
    
    &:hover {
      text-decoration: underline; /* Sublinhado ao passar o mouse */
    }
  }
`;

export const ContactBox = styled.div`
  background-color: #d4c8b3; /* Cor de fundo da box */
  padding: 20px; /* Espaçamento interno */
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra da box */
  margin-top: 20px; /* Margem acima da box */
`;
