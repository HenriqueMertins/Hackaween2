import { useNavigate } from 'react-router-dom'; 
import images from '../Img/index';
import {
  Container, Header, BioContainer, BioTitle, BioParagraph, LogoImg
} from './style'; 

const Biography = () => {
  const navigate = useNavigate(); 

  return (
    <Container>
      <Header>
        <LogoImg>
          <img src={images.logo} alt="Imagem do logo" />
        </LogoImg>
        <h1>GreenScapes</h1>
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

        {/* Seção de Missão e Visão */}
        <BioTitle>Missão e Visão</BioTitle>
        <BioParagraph>
          Nossa missão é promover práticas sustentáveis no turismo e incentivar o voluntariado, 
          promovendo mudanças positivas nas comunidades que atendemos. 
        </BioParagraph>
        <BioParagraph>
          Nossa visão é um mundo onde o turismo e o voluntariado andam de mãos dadas, 
          contribuindo para a preservação do meio ambiente e o bem-estar das comunidades locais.
        </BioParagraph>

        {/* Projetos em Destaque */}
        <BioTitle>Projetos em Destaque</BioTitle>
        <BioParagraph>
          <strong>Reflorestamento na Amazônia:</strong> Colaboramos com comunidades locais para restaurar áreas desmatadas.
        </BioParagraph>
        <BioParagraph>
          <strong>Limpeza das Praias:</strong> Organizamos mutirões de limpeza nas praias para proteger a vida marinha.
        </BioParagraph>

        {/* Depoimentos de Voluntários */}
        <BioTitle>Depoimentos de Voluntários</BioTitle>
        <BioParagraph>
          "Trabalhar com a GreenScapes foi uma experiência transformadora. 
          Senti que fiz a diferença e aprendi muito sobre conservação!" - <em>Maria S.</em>
        </BioParagraph>
        <BioParagraph>
          "A oportunidade de voluntariar e viajar ao mesmo tempo foi incrível. 
          Recomendo a todos!" - <em>João P.</em>
        </BioParagraph>

        {/* Como Participar */}
        <BioTitle>Como Participar</BioTitle>
        <BioParagraph>
          Se você deseja se juntar a nós em nossa missão, considere fazer uma doação, se inscrever como voluntário, 
          ou participar de nossos eventos. Sua ajuda faz toda a diferença!
        </BioParagraph>
      </BioContainer>
    </Container>
  );
};

export default Biography;
