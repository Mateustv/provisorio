import { Button} from "@mui/material";
import {styled} from "@mui/material"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const ButtonBaixar = styled(Button)`
  background-color: var(--color-steelblue)!important;
`;
const ButtonComentar = styled(Button)`
  background-color: var(--color-steelblue)!important;
`;
const ButtonComentarios = styled(Button)`
  background-color: var(--color-steelblue)!important;
`;

const ButtonBack = styled(KeyboardBackspaceIcon)`
  position: absolute;
  top: 26px;
  left: 16px;
  cursor: pointer;
`;

const Cardapio = styled('img')`
    margin-top: 150px;
    margin-left: 58px;
    width: 305px;
    height: 216px;
    object-fit: cover;
`;

const HeadChild = styled('img')`
  position: absolute;
  top: 26px;
  left: 95px;
  border-radius: var(--br-6xs);
  width: 64px;
  height: 37px;
`;
const Rupay = styled('h2')`
  margin: 0;
  position: absolute;
  top: 28px;
  left: 168px;
  font-size: inherit;
  font-weight: 800;
  font-family: inherit;
  display: inline-block;
  width: 194px;
  height: 33px;
`;

const Head = styled('header')`
  position: absolute;
  top: 0px;
  background-color: var(--color-steelblue);
  width: 420px;
  height: 84px;
  text-align: center;
  font-size: var(--font-size-7xl);
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const CardpioRoot = styled('div')`
  position: relative;
  width: 420px;
  height: 844px;
  overflow: hidden;
  
`;
const AlignButtons = styled('div')`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export {CardpioRoot, Head, HeadChild, Rupay, Cardapio, ButtonBaixar, ButtonComentar, ButtonComentarios, ButtonBack,AlignButtons}