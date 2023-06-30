import Link from "next/link";
import {CardpioRoot, Head, HeadChild, Rupay, Cardapio, ButtonBaixar, ButtonComentar, ButtonComentarios, ButtonBack, AlignButtons} from "./style.js";

const Menu = () => {
  return (
    <CardpioRoot>
        <Head>
            <HeadChild alt="" src="/logo_rupay.svg" />
            <Rupay>RUPay</Rupay>
            <Link href="/consultMenu">
                <ButtonBack fontSize="large"/>
            </Link>
        </Head>
        <Cardapio alt="logo" src="/cardapio.png"/>
        <AlignButtons>
            <ButtonBaixar
            sx={{ width: 300 }}
            variant="contained"
            name="button_baixar"
            size="large"
            >
            Baixar PDF
            </ButtonBaixar>
            <ButtonComentar
            sx={{ width: 300 }}
            variant="contained"
            name="button_comentar"
            size="large"
            >
            Fazer um comentário
            </ButtonComentar>
            <ButtonComentarios
            sx={{ width: 300 }}
            variant="contained"
            name="button_comentarios"
            size="large"
            >
            Comentários
            </ButtonComentarios>
        </AlignButtons>
    </CardpioRoot>
  );
};

export default Menu;
