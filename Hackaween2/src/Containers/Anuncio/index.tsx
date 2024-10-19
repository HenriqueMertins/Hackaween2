import images from '../Img/index'; // Importar as imagens
import {
  Container,
  Header,
  LogoImg,
  BoxContainer,
  Box,
  BoxImage,
  BoxText,
  BoxTitle,
  BoxDescription,
  ContactButton,
  RegisterButton,
} from './style'; // Importar os estilos
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate

const Anuncio = () => {
  const navigate = useNavigate(); // Cria uma instância do hook useNavigate

  const handleRegisterAnuncioClick = () => {
    navigate('/registerAnuncio'); // Redireciona para a página de login
  };

  return (
    <Container>
      <Header>
        <LogoImg>
          <img src={images.logo} alt="Imagem do logo" />
        </LogoImg>
        <h1>GreenScapes</h1>
        <RegisterButton onClick={handleRegisterAnuncioClick}>Registrar Anuncio</RegisterButton> {/* Botão de Registro */}
      </Header>

      {/* Primeira fileira de boxes */}
      <BoxContainer>
        <Box>
          <BoxImage>
            <img src={images.boxImage1} alt="Imagem 1" /> {/* Imagem 1 */}
          </BoxImage>
          <BoxText>
            <BoxTitle>Reflorestamento</BoxTitle>
            <BoxDescription>
              Parceiros do GreenPeace, estamos trabalhando no reflorestamento de matas queimadas, temos vagas para trabalho voluntário no Alaska, Texas e Flórida, para mais informações entre em contato.
            </BoxDescription>
            <div>
              <ContactButton>Entre em Contato</ContactButton>
            </div>
          </BoxText>
        </Box>
        <Box>
          <BoxImage>
            <img src={images.boxImage2} alt="Imagem 2" /> {/* Imagem 2 */}
          </BoxImage>
          <BoxText>
            <BoxTitle>Praia Limpa</BoxTitle>
            <BoxDescription>
              Somos uma casa de hospedagem nas Maldivas, oferecendo uma estadia de 7 dias por R$50 por dia, em troca de trabalho voluntário de 4 horas por dia na limpeza de praias.
            </BoxDescription>
            <div>
              <ContactButton>Entre em Contato</ContactButton>
            </div>
          </BoxText>
        </Box>
        <Box>
          <BoxImage>
            <img src={images.boxImage3} alt="Imagem 3" /> {/* Imagem 3 */}
          </BoxImage>
          <BoxText>
            <BoxTitle>Sem Fome</BoxTitle>
            <BoxDescription>
              Somos uma instituição no Egito que combate a fome e buscamos voluntários para trabalhar com crianças por 14 dias. Estadia grátis, com 7 dias de folga.
            </BoxDescription>
            <div>
              <ContactButton>Entre em Contato</ContactButton>
            </div>
          </BoxText>
        </Box>
      </BoxContainer>
      {/* Segunda fileira de boxes */}
      <BoxContainer>
        <Box>
          <BoxImage>
            <img src={images.boxImage1} alt="Imagem 1" /> {/* Imagem 1 */}
          </BoxImage>
          <BoxText>
            <BoxTitle>Reflorestamento</BoxTitle>
            <BoxDescription>
              Parceiros do GreenPeace, estamos trabalhando no reflorestamento de matas queimadas, temos vagas para trabalho voluntário no Alaska, Texas e Flórida, para mais informações entre em contato.
            </BoxDescription>
            {/* Adicionando a div para o botão */}
            <div>
              <ContactButton>Entre em Contato</ContactButton>
            </div>
          </BoxText>
        </Box>
        <Box>
          <BoxImage>
            <img src={images.boxImage2} alt="Imagem 2" /> {/* Imagem 2 */}
          </BoxImage>
          <BoxText>
            <BoxTitle>Praia Limpa</BoxTitle>
            <BoxDescription>
              Somos uma casa de hospedagem nas Maldivas, oferecendo uma estadia de 7 dias por R$50 por dia, em troca de trabalho voluntário de 4 horas por dia na limpeza de praias.
            </BoxDescription>
            {/* Adicionando a div para o botão */}
            <div>
              <ContactButton>Entre em Contato</ContactButton>
            </div>
          </BoxText>
        </Box>
        <Box>
          <BoxImage>
            <img src={images.boxImage3} alt="Imagem 3" /> {/* Imagem 3 */}
          </BoxImage>
          <BoxText>
            <BoxTitle>Sem Fome</BoxTitle>
            <BoxDescription>
              Somos uma instituição no Egito que combate a fome e buscamos voluntários para trabalhar com crianças por 14 dias. Estadia grátis, com 7 dias de folga.
            </BoxDescription>
            {/* Adicionando a div para o botão */}
            <div>
              <ContactButton>Entre em Contato</ContactButton>
            </div>
          </BoxText>
        </Box>
      </BoxContainer>

      {/* Terceira fileira de boxes */}
      <BoxContainer>
        <Box>
          <BoxImage>
            <img src={images.boxImage1} alt="Imagem 1" /> {/* Imagem 1 */}
          </BoxImage>
          <BoxText>
            <BoxTitle>Reflorestamento</BoxTitle>
            <BoxDescription>
              Parceiros do GreenPeace, estamos trabalhando no reflorestamento de matas queimadas, temos vagas para trabalho voluntário no Alaska, Texas e Flórida, para mais informações entre em contato.
            </BoxDescription>
            {/* Adicionando a div para o botão */}
            <div>
              <ContactButton>Entre em Contato</ContactButton>
            </div>
          </BoxText>
        </Box>
        <Box>
          <BoxImage>
            <img src={images.boxImage2} alt="Imagem 2" /> {/* Imagem 2 */}
          </BoxImage>
          <BoxText>
            <BoxTitle>Praia Limpa</BoxTitle>
            <BoxDescription>
              Somos uma casa de hospedagem nas Maldivas, oferecendo uma estadia de 7 dias por R$50 por dia, em troca de trabalho voluntário de 4 horas por dia na limpeza de praias.
            </BoxDescription>
            {/* Adicionando a div para o botão */}
            <div>
              <ContactButton>Entre em Contato</ContactButton>
            </div>
          </BoxText>
        </Box>
        <Box>
          <BoxImage>
            <img src={images.boxImage3} alt="Imagem 3" /> {/* Imagem 3 */}
          </BoxImage>
          <BoxText>
            <BoxTitle>Sem Fome</BoxTitle>
            <BoxDescription>
              Somos uma instituição no Egito que combate a fome e buscamos voluntários para trabalhar com crianças por 14 dias. Estadia grátis, com 7 dias de folga.
            </BoxDescription>
            {/* Adicionando a div para o botão */}
            <div>
              <ContactButton>Entre em Contato</ContactButton>
            </div>
          </BoxText>
        </Box>
      </BoxContainer>
    </Container>
  );
};

export default Anuncio;
