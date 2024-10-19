import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    color: #266041; /* Cor do título */
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  color: #266041; /* Cor do título do anúncio */
  margin: 10px 0;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  margin: 10px 0 20px;
`;

export const ContactButton = styled.button`
  background-color: #266041; /* Cor do botão */
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #1f4c36; /* Cor do botão ao passar o mouse */
  }
`;
