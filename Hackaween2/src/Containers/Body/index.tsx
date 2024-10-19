import {
  Container, Header, LoginButton, ImageContainer, TextContainer, Title, LixoImg,
  LogoImg, Paragraph, BioButton, Divider, BoxContainer, Box, BoxImage, BoxText, BoxTitle, BoxDescription,
  ContactButton, Footer, FooterContent, FooterSection, FooterTitle, FooterText, FooterLinks, FooterLink, FooterBottom
} from './style';
import images from '../Img/index';  // Importando todas as imagens do índice
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate

function Body() {

  const navigate = useNavigate(); // Cria uma instância do hook useNavigate

  const handleLoginClick = () => {
    navigate('/login'); // Redireciona para a página de login
  };

  const handleBioClick = () => {
    navigate('/biography'); // Redireciona para a página de biografia
  };

  const handleSeeAllClick = () => {
    navigate('/anuncio'); // Muda para a tela de todos os destaques
  };

  return (
    <Container>
      <Header>
        <LogoImg>
          <img src={images.logo} alt="Imagem do logo" />
        </LogoImg>
        <h1>GreenScapes</h1>
        <LoginButton onClick={handleLoginClick}>Login</LoginButton>
      </Header>
      <div style={{ display: 'flex', width: '100%', padding: '40px 20px' }}>
        <ImageContainer style={{ marginTop: '20px' }}>
          <LixoImg>
            <img src={images.lixo} alt="Imagem de lixo" />
          </LixoImg>
        </ImageContainer>
        <TextContainer>
          <Title>Podemos mudar o mundo!</Title>
          <Paragraph>
            Somos uma plataforma que conecta você a experiências únicas de turismo sustentável. Trabalhe em projetos que fazem a diferença enquanto explora novos destinos e aprende sobre as culturas locais. Junte-se a nós e faça parte dessa mudança!
          </Paragraph>
          <BioButton onClick={handleBioClick}>Quem somos</BioButton> {/* Navegação para a biografia */}
        </TextContainer>
      </div>

      <div style={{ padding: '1px 0', textAlign: 'center' }}>
        <Divider />
      </div>

      <div style={{ position: 'relative', padding: '20px 10%' }}>
        {/* Título dos Destaques */}
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Destaques</h2>

        {/* BoxContainer com destaques */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>

          {/* Seta esquerda */}
          <div style={{
            position: 'absolute',
            left: '-30px',  // Ajusta a posição mais próxima das boxes
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            fontSize: '2em',
            userSelect: 'none',
            opacity: 0.6
          }}>
            &#9664; {/* Seta esquerda */}
          </div>

          {/* BoxContainer */}
          <BoxContainer style={{ display: 'flex', overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <BoxImage>
                <img src={images.boxImage1} alt="Imagem 1" /> {/* Imagem 1 */}
              </BoxImage>
              <BoxText>
                <BoxTitle>Reflorestamento</BoxTitle>
                <BoxDescription>
                  Parceiros do GreenPeace, estamos trabalhando no reflorestamento de matas queimadas, temos vagas para trabalho voluntário no
                  Alaska, Texas e Flórida, para mais informações entre em contato.
                </BoxDescription>
                <ContactButton>Entre em Contato</ContactButton>
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
                <ContactButton>Entre em Contato</ContactButton>
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
                <ContactButton>Entre em Contato</ContactButton>
              </BoxText>
            </Box>
          </BoxContainer>

          {/* Seta direita */}
          <div style={{
            position: 'absolute',
            right: '-30px',  // Ajusta a posição mais próxima das boxes
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            fontSize: '2em',
            userSelect: 'none',
            opacity: 0.6
          }}>
            &#9654; {/* Seta direita */}
          </div>
        </div>

        {/* Indicadores (bolinhas) */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <span style={{ height: '10px', width: '10px', backgroundColor: '#ccc', borderRadius: '50%', margin: '0 5px' }}></span>
          <span style={{ height: '10px', width: '10px', backgroundColor: '#ccc', borderRadius: '50%', margin: '0 5px' }}></span>
          <span style={{ height: '10px', width: '10px', backgroundColor: '#007BFF', borderRadius: '50%', margin: '0 5px' }}></span>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <ContactButton onClick={handleSeeAllClick}>
          Ver Todos os Destaques
        </ContactButton>
      </div>

      {/* Footer */}
      <Footer>
        <FooterContent>
          <FooterSection>
            <FooterTitle>Política de Doação</FooterTitle>
            <FooterText>
              Saiba como suas doações são usadas para promover o voluntariado e apoiar comunidades ao redor do mundo. Transparência é a nossa prioridade.
            </FooterText>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Relatórios Anuais</FooterTitle>
            <FooterText>
              Acesse nossos relatórios anuais e veja o impacto que nossas iniciativas de voluntariado têm gerado globalmente.
            </FooterText>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Política de Comunidade</FooterTitle>
            <FooterText>
              Nossos voluntários seguem um código de conduta que promove respeito e colaboração em todas as nossas atividades.
            </FooterText>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Contato</FooterTitle>
            <FooterText>Email: contato@nossaorg.com</FooterText>
            <FooterText>Telefone: +55 5391234-5678</FooterText>
            <FooterText>Endereço: Av. Exemplo, 123, São Paulo, SP</FooterText>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Siga-nos</FooterTitle>
            <FooterLinks>
              <FooterLink href="#">Facebook</FooterLink>
              <FooterLink href="#">Instagram</FooterLink>
              <FooterLink href="#">Twitter</FooterLink>
            </FooterLinks>
          </FooterSection>
        </FooterContent>
        <FooterBottom>
          <FooterText>© 2024 Nossa Organização. Todos os direitos reservados.</FooterText>
        </FooterBottom>
      </Footer>
    </Container>
  );
}

export default Body;
