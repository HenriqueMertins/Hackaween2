import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0; // Cor de fundo
  min-height: 100vh;
  padding: 20px;
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
  background-color: #4CAF50; // Cor do cabeçalho
  padding: 20px;
  color: white;
`;

export const BioContainer = styled.div`
  max-width: 800px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

export const BioTitle = styled.h2`
  text-align: center;
  color: #333;
`;

export const BioImage = styled.div`
  text-align: center;
  margin: 20px 0;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export const BioParagraph = styled.p`
  color: #555;
  line-height: 1.6;
  margin: 10px 0;
`;

export const BackButton = styled.button`
  background-color: #f44336; // Cor do botão de voltar
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f; // Cor do botão ao passar o mouse
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  padding: 20px;
  background-color: #4CAF50; // Cor do rodapé
  color: white;
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterSection = styled.div`
  width: 20%;
`;

export const FooterTitle = styled.h3`
  margin-bottom: 10px;
`;

export const FooterText = styled.p`
  font-size: 0.9em;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
`;
