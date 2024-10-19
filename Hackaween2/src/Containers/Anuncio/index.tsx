import images from '../Img/index'; // Importar as imagens
import {
  Container, Header, LogoImg
} from './style'; // Importar os estilos

const Anuncio = () => {
  return (
    <Container>
      <Header>
        <LogoImg>
          <img src={images.logo} alt="Imagem do logo" />
        </LogoImg>
        <h1>GreenScapes</h1>
      </Header>
    </Container>
  );
};

export default Anuncio;
