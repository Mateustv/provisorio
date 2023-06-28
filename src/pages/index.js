import Link from "next/link";
import {ButtonColocar, ButtonConsultar, ButtonSair, NomeUsuario, SeuSaldo, ValorSaldo, UserSection, Rupay, Head, PginaInicialRoot, Logo } from "./style";

function onButtonClick(){
  return null
}

export default function Home() {
  return (
    <PginaInicialRoot>
      <Head>
        <Logo alt="logo" src="/logo_rupay.svg" />
        <Rupay>RUPay</Rupay>
      </Head>

      <UserSection>
        <NomeUsuario>Olá, Fernanda!</NomeUsuario>
        <SeuSaldo>seu saldo é:</SeuSaldo>
        <ValorSaldo>R$ 54,60</ValorSaldo>
      </UserSection>

      <ButtonColocar
        sx={{ width: 279 }}
        variant="contained"
        name="buttun_colocar"
        href="/colocar-crditos"
        target="_blank"
      >
        Colocar créditos
      </ButtonColocar>
      <ButtonConsultar
        sx={{ width: 279 }}
        variant="contained"
        name="button_consultar"
        href="/cardpio-seleo-de-campus"
      >
        Consultar cardápio
      </ButtonConsultar>
      <ButtonSair
        sx={{ width: 279 }}
        variant="contained"
        name="button_sair"
      >
        <Link href="/login">
          Sair
        </Link>
      </ButtonSair>
    </PginaInicialRoot>
  );
};
