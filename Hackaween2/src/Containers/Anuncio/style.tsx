import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 900px; /* Aumentar a largura máxima para ocupar mais espaço */
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

export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Distribui as boxes igualmente */
  margin-bottom: 30px; /* Aumentar espaçamento entre fileiras de boxes */
  flex-wrap: wrap; /* Permite que as boxes quebrem para a próxima linha se não houver espaço suficiente */
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column; /* Dispor o conteúdo verticalmente */
  justify-content: space-between; /* Garante que o botão fique no final */
  flex: 1;
  max-width: calc(30% - 20px);
  margin: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

// Estilo da imagem da box
export const BoxImage = styled.div`
  img {
    width: 100%; /* A imagem agora ocupará toda a largura da box */
    height: auto;
  }
`;

export const BoxText = styled.div`
  padding: 10px;
`;

export const BoxTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 0;  /* Remove margens adicionais para melhor alinhamento */
`;

// Estilo da descrição da box
export const BoxDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;  /* Coloca o título à esquerda e o botão à direita */
  align-items: center;             /* Alinha o título e o botão verticalmente no centro */
  margin-bottom: 10px;             /* Espaço entre o cabeçalho e a descrição */
`;

export const ContactButton = styled.button`
  background-color: #266041;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
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
