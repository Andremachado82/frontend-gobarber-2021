import React from 'react';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import logoImg from '../../assets/thaisLogo.svg';

const SignUp: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="login">
          <FiArrowLeft />
          Voltar para o logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
