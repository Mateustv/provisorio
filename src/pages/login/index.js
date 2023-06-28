import Link from 'next/link';
import {LoginRoot,LoginChild, AindaNoPossuiContainer, RegistreSe, Span, AindaNoPossui, FormLogin, ButtonEntrar, InputSenha, InputMatricula, Rupay} from './style';

function onAindaNoPossuiClick(){
  return null
}

export default function Login(){
  return (
    <LoginRoot>
      <LoginChild alt="logo" src="/logo_rupay.svg" />
      <Rupay>RUpay</Rupay>
      <FormLogin method="get">
        <InputMatricula
          fullWidth
          color="primary"
          variant="outlined"
          type="text"
          name="input_matricula"
          label="insira sua matrícula"
          required
        />
        <InputSenha
          fullWidth
          color="primary"
          variant="outlined"
          type="password"
          name="input_senha"
          label="insira sua senha "
          required
        />
        <ButtonEntrar
          sx={{ width: 279 }}
          variant="contained"
          name="button_entrar"
          color='primary'
        >
          Entrar
        </ButtonEntrar>
      </FormLogin>

      <AindaNoPossuiContainer span_login onClick={onAindaNoPossuiClick}>
        <AindaNoPossui>Ainda não possui uma conta?</AindaNoPossui>
        <RegistreSe>
          <Span>{` `}</Span>
          <Link href='/signUp'>Registre-se</Link>
        </RegistreSe>
        <AindaNoPossui> agora!</AindaNoPossui>
      </AindaNoPossuiContainer>

    </LoginRoot>
  );
};

