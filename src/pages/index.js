import Link from "next/link";
import {ButtonColocar, ButtonConsultar, ButtonSair, NomeUsuario, SeuSaldo, ValorSaldo, UserSection, Rupay, Head, PginaInicialRoot, Logo } from "./style";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from 'next/router'


export default function Home() {
  const {status}= useSession()
  const router = useRouter()


  useEffect(() => {
    if(status === "unauthenticated"){
      router.replace("/login")
    }
  }, [status])

  if(status === "authenticated"){
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
        onClick={()=> signOut({callbackUrl: '/login'})}
      >
          Sair
      </ButtonSair>
    </PginaInicialRoot>
  );}
};
