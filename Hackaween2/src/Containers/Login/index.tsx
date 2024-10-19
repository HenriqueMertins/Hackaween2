import { useState } from 'react';
import { Container, Title, Form, Input, Button, ErrorMessage } from './style';
import { useNavigate } from 'react-router-dom'; // Para navegação
import { FormEvent } from 'react';
import { validateUser } from '../../Bd/users';  // Importar função para validar usuário

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [error, setError] = useState('');
  const [documentType, setDocumentType] = useState('cpf'); //Aqui defino que o cpf

  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, preencha o email e a senha.');
      return;
    }

    // Usar o método validateUser para verificar as credenciais
    if (validateUser(email, password)) {
      navigate('/body');
      setError('');
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <Container>
      <Title>HACKAWEEN</Title>
      <Form onSubmit={handleLogin}>

        <div>
          <label>
            <input
              type="radio"
              value="cpf"
              name="documentType"
              checked={documentType === 'cpf'}
              onChange={() => setDocumentType('cpf')}
            />
            CPF
          </label>
          <label>
            <input
              type="radio"
              value="cnpj"
              name="documentType"
              checked={documentType === 'cnpj'}
              onChange={() => setDocumentType('cnpj')}
            />
            CNPJ
          </label>
        </div>

        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
   {documentType === 'cpf' && (
          <Input
            type="tel"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        )}
        {documentType === 'cnpj' && (
          <>
            <Input
              type="text"
              placeholder="CNPJ"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              required
            />
          </>
        )}



        {/* Envolvendo os botões em uma div */}
        <div>
          <Button type="submit">Login</Button>
          <Button type="button" onClick={() => navigate('/register')}>Registrar-se</Button>
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </Container>
  );
}

export default Login;