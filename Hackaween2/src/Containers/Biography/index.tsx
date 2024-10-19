import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate
import {
  Container, Header, BioContainer, BioTitle, BioParagraph, BioImage,
  BackButton, Footer, FooterContent, FooterSection, FooterTitle, FooterText, FooterLinks, FooterLink, FooterBottom
} from './style'; // Importe os componentes de estilo que você criou

const Biography = () => {
  const navigate = useNavigate(); // Cria uma instância do hook useNavigate

  const handleBackClick = () => {
    navigate('/'); // Navega de volta para a página principal
  };

  return (
    <Container>
      <Header>
        <h1>Quem Somos</h1>
        <BackButton onClick={handleBackClick}>Voltar</BackButton>
      </Header>
      <BioContainer>
        <BioTitle>Nossa História</BioTitle>
        
        <BioParagraph>
          Nós somos uma organização dedicada a promover o turismo sustentável e o voluntariado
          em comunidades ao redor do mundo. Nossa missão é conectar pessoas a experiências
          únicas que fazem a diferença, ajudando a preservar o meio ambiente e a cultura local.
        </BioParagraph>
        <BioParagraph>
          Desde nossa fundação, temos trabalhado em projetos que visam a conservação de recursos
          naturais e o desenvolvimento social, sempre em parceria com as comunidades locais.
          Junte-se a nós e faça parte dessa mudança positiva!
        </BioParagraph>
      </BioContainer>

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
            <FooterText>Telefone: +55 (11) 1234-5678</FooterText>
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
};

export default Biography;
