import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import {useForm} from 'react-hook-form';
import {LoginRoot,LoginChild, AindaNoPossuiContainer, RegistreSe, Span, AindaNoPossui, FormLogin, ButtonEntrar, InputSenha, InputMatricula, Rupay} from './style';


export default function Login(){
  const {register, handleSubmit} = useForm()
  const [output, setOutput] = useState('')
  
  async function loginUser(event){
      const res = await signIn('credentials', {
        matricula: event.matricula,
        senha: event.senha,
      })
      console.log(res)
      setOutput(JSON.stringify(event, null, 2))
  }

  return (
    <LoginRoot>
      <LoginChild alt="logo" src="/logo_rupay.svg" />
      <Rupay>RUpay</Rupay>
      <FormLogin onSubmit={handleSubmit(loginUser)}>
        <InputMatricula
          fullWidth
          color="primary"
          variant="outlined"
          type="text"
          label="insira sua matrícula"
          required
          {...register('matricula')}
        />
        <InputSenha
          fullWidth
          color="primary"
          variant="outlined"
          type="password"
          label="insira sua senha "
          required
          {...register('senha')}
        />
        <ButtonEntrar
          sx={{ width: 279 }}
          variant="contained"
          name="button_entrar"
          color='primary'
          type='submit'
        >
          Entrar
        </ButtonEntrar>
      </FormLogin>

      <AindaNoPossuiContainer span_login>
        <AindaNoPossui>Ainda não possui uma conta?</AindaNoPossui>
        <RegistreSe>
          <Span>{` `}</Span>
          <Link href='/signUp'>Registre-se</Link>
        </RegistreSe>
        <AindaNoPossui> agora!</AindaNoPossui>
      </AindaNoPossuiContainer>

      <pre>{output}</pre>
    </LoginRoot>

  );
};

