import { useState } from 'react';
import { Container, Form, Input, Button, ErrorMessage, Select, LogoImg, TextArea } from './style';
import images from '../Img/index';  // Importando todas as imagens do índice

import { useNavigate } from 'react-router-dom';

function RegisterAnuncio() {
  const [email, setEmail] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [local, setLocal] = useState('');
  const [foto, setFoto] = useState('')
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verifica se todos os campos estão preenchidos
    if (!email) {
      setError('Por favor, preencha todos os campos.');
      return;
    }


    const anuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');
    if (anuncios.find((anuncios: { email: string }) => anuncios.email === email)) {
      setError('Usuário já existe');
      return;
    }



    // Adiciona o novo usuário ao localStorage
    anuncios.push({ email, descricao, instituicao, foto, local });
    localStorage.setItem('anuncios', JSON.stringify(anuncios));

    // Redireciona para a tela de login
    setError('');
    navigate('/anuncio');
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      // Faça algo com o arquivo


      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          // Verifique se reader.result não é null
          if (reader.result) {
            setFoto(reader.result as string); // Fazendo um type assertion para string
          }
        };
        reader.readAsDataURL(file); // Lê o arquivo como URL base64
      }
    }
  };
  return (
    <Container>
      <LogoImg>
        <img src={images.logo} alt="Imagem do logo" />  {/* Corrigido o alt */}
      </LogoImg>
      <Form onSubmit={handleRegister}>
        <br />
        <Input
          type="email"
          placeholder="Email para contato"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Local de destino"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          required
        />

        {/* Combo box para seleção de que tipo de instituição */}
        <Select
          value={instituicao}
          onChange={(e) => setInstituicao(e.target.value)}
          required
        >
          <option value="">Tipo de Insituição</option>
          <option value="Hotel">Hotel</option>
          <option value="Pousada">Pousada</option>
          <option value="ApartHotel">Apart-Hotel</option>
          <option value="Resorts">Resorts</option>
          <option value="Acampamento">Hospedagem em Acampamento</option>
          <option value="Outros">Outros...</option>
        </Select>
        <Input
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={handleFileChange}
          required
        />
        <TextArea
          type="text"
          minLength={60}
          maxLength={240}
          placeholder="Descreva a oferta"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <Button type="submit">Cadastrar Oferta</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}

      </Form>
    </Container >
  );
}

export default RegisterAnuncio;