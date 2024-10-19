import styled from 'styled-components';

// Container principal da biografia
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5; /* Cor de fundo clara */
  min-height: 100vh; /* Garante que ocupe a tela inteira */
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

export const BioContainer = styled.div`
  max-width: 800px; /* Largura máxima do container */
  margin: 0 auto; /* Centraliza horizontalmente */
  padding: 20px;
  background-color: #d4c8b3; /* Mudança na cor de fundo para #d4c8b3 */
  border-radius: 10px; /* Cantos arredondados */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
`;

// Título da biografia
export const BioTitle = styled.h2`
  font-size: 2rem; /* Aumentando o tamanho do título */
  color: #266041; /* Cor do título */
  margin-bottom: 15px; /* Espaçamento abaixo do título */
  border-bottom: 2px solid #266041; /* Linha abaixo do título com nova cor */
  padding-bottom: 10px; /* Espaçamento abaixo da linha */
`;

// Parágrafos da biografia
export const BioParagraph = styled.p`
  font-size: 1.2rem; /* Aumentando o tamanho da fonte do parágrafo */
  color: #666; /* Cor do texto */
  line-height: 1.6; /* Altura da linha para melhor legibilidade */
  margin-bottom: 15px; /* Espaçamento abaixo do parágrafo */
`;

// Estilo da imagem do logo
export const LogoImg = styled.div`
  img {
    width: 100px; /* Largura do logo */
    height: auto; /* Mantém a proporção da imagem */
  }
`;
