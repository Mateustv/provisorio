import { Button, TextField, Icon} from "@mui/material";
import { styled } from "@mui/material"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ButtonConfirm = styled(Button)`
  position: absolute;
  background-color: var(--color-steelblue) !important;
  top: 45px;
  left: 0px;
`;
const InputCode = styled(TextField)`
  border: none;
  position: absolute;
  top: -40px;
  left: 0px;
`;

const ButtonBack = styled(KeyboardBackspaceIcon)`
  position: absolute;
  top: 26px;
  left: 16px;
  cursor: pointer;
`;

const Form = styled('form')`
  position: absolute;
  top: 389px;
  left: 48px;
  width: 300px;
  height: 124px;
`;

const DigiteOCdigo = styled('h1')`
  margin: 0;
  position: absolute;
  top: -150px;
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  text-align: center;
  display: inline-block;
  width: 320px;
  height: 58px;
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
  font-style: italic;
`;
const ConfirmaoRoot = styled('div')`
  position: relative;
  width: 100%;
  height: 844px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
`;

export { ButtonConfirm, InputCode, ButtonBack, Form, DigiteOCdigo, HeadChild, Rupay, Head, ConfirmaoRoot}