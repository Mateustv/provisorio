import { Button} from "@mui/material";
import {styled} from "@mui/material"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ButtonColocar = styled(Button)`
  position: absolute;
  top: 410px;
  left: 55px;
  background-color:#044569 !important;
`;
const ButtonConsultar = styled(Button)`
  position: absolute;
  top: 465px;
  left: 55px;
  background-color:#044569 !important;
`;
const ButtonSair = styled(Button)`
  position: absolute;
  top: 525px;
  left: 55px;
  background-color:#044569 !important;
`;

const Iconbutton1 = styled(KeyboardBackspaceIcon)`
  position: absolute;
  top: 26px;
  left: 16px;
  cursor: pointer;
`;

const NomeUsuario = styled('h1')`
  margin: 0;
  position: absolute;
  top: -20px;
  left: 3px;
  font-size: inherit;
  font-weight: 300;
  font-family: inherit;
  display: inline-block;
  width: 254px;
  height: 45px;
`;
const SeuSaldo = styled('h3')`
  margin: 0;
  position: absolute;
  top: 50px;
  left: 3px;
  font-size: var(--font-size-7xl);
  font-weight: 300;
  font-family: inherit;
  display: inline-block;
  width: 254px;
  height: 35px;
`;
const ValorSaldo = styled('h2')`
  margin: 0;
  position: absolute;
  top: 100px;
  left: 0px;
  font-size: 55px;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  width: 261px;
  height: 71px;
`;
const UserSection = styled('section')`
  position: absolute;
  top: 190px;
  left: 64px;
  width: 261px;
  height: 209px;
  text-align: center;
  font-size: 35px;
  font-family: var(--font-inter);
`;
const Logo = styled('img')`
  position: absolute;
  top: 26px;
  left: 80px;
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
  background-color: #03527e;
  width: 420px;
  height: 84px;
  text-align: center;
  font-size: var(--font-size-7xl);
  color: var(--color-white);
  font-style: italic;
`;
const PginaInicialRoot = styled('div')`
  position: relative;
  width: 100%;
  height: 844px;
  overflow: hidden;
`;

export {ButtonColocar, ButtonConsultar, ButtonSair, Iconbutton1, NomeUsuario, SeuSaldo, ValorSaldo, UserSection, Logo, Rupay, Head, PginaInicialRoot}