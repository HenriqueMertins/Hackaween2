import images from '../Img/index'; // Importar as imagens
import {
  Container,
  Header,
  LogoImg,
  ContactBox, // Importando o estilo da box de contato
} from './style'; // Importar os estilos
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate

const Contact = () => {
  const navigate = useNavigate(); // Cria uma instância do hook useNavigate

  return (
    <Container>
      <Header>
        <LogoImg>
          <img src={images.logo} alt="Imagem do logo" />
        </LogoImg>
        <h1>GreenScapes</h1>
      </Header>

      {/* Box de Contato com fundo da cor d4c8b3 */}
      <ContactBox>
        <h2>Contato do Anunciante</h2>
        <p><strong>Telefone:</strong> (99) 9999-9999</p>
        <p><strong>Email:</strong> contato@greenscapes.com</p>
        <p><strong>Redes Sociais:</strong></p>
        <ul>
          <li><a href="https://www.facebook.com/greenscapes">Facebook</a></li>
          <li><a href="https://www.instagram.com/greenscapes">Instagram</a></li>
          <li><a href="https://www.twitter.com/greenscapes">Twitter</a></li>
        </ul>
      </ContactBox>
    </Container>
  );
};

export default Contact;
