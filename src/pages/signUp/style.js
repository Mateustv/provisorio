import { Button, TextField, Icon } from "@mui/material";
import { styled } from "@mui/material"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ButtonCadastrar = styled(Button)`
  position: absolute;
  top: 150px;
  left: 0px;
  background-color: #03527e !important;
`;
const InputSenha = styled(TextField)`
  border: none;
  position: absolute;
  top: 60px;
  left: 0px;
`;

const InputSenha1 = styled(TextField)`
  border: none;
  position: absolute;
  top: -20px;
  left: 0px;
`;

const InputMatricula = styled(TextField)`
  border: none;
  position: absolute;
  top: -100px;
  left: 0px;
`;

const ButtonBack = styled(KeyboardBackspaceIcon)`
  position: absolute;
  top: 26px;
  left: 16px;
  cursor: pointer;
`;



const InsiraASenha = styled('label')`
  cursor: pointer;
  position: absolute;
  top: 164px;
  left: 2px;
  font-size: var(--font-size-sm);
  font-weight: 300;
  font-family: var(--font-inter);
  text-align: left;
  display: inline-block;
  width: 239px;
  height: 14px;
`;

const InsiraUmaSenha = styled('label')`
  cursor: pointer;
  position: absolute;
  top: 82px;
  left: 2px;
  font-size: var(--font-size-sm);
  font-weight: 300;
  font-family: var(--font-inter);
  text-align: left;
  display: inline-block;
  width: 239px;
  height: 14px;
`;

const InsiraSuaMatrcula = styled('label')`
  cursor: pointer;
  position: absolute;
  top: -120px;
  left: 2px;
  font-size: var(--font-size-sm);
  font-weight: 300;
  font-family: var(--font-inter);
  text-align: left;
  display: inline-block;
  width: 239px;
  height: 14px;
`;
const Form = styled('form')`
  position: absolute;
  top: 303px;
  left: 55px;
  width: 279px;
  height: 316px;
`;
const CrieSuaConta = styled('h1')`
  margin: 0;
  position: absolute;
  top: 120px;
  left: 75px;
  font-size: inherit;
  font-weight: 400;
  display: inline-block;
  width: 254px;
  height: 45px;
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
  background-color: #03527e;
  color: var(--color-white);
  width: 420px;
  height: 84px;
  text-align: center;
  font-style: italic;
  font-size: var(--font-size-7xl);
`;
const CadastroRoot = styled('div')`
  position: relative;
  width: 100%;
  height: 844px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-16xl);
  font-family: Roboto;
`;

export { CadastroRoot, Head, HeadChild, Rupay, CrieSuaConta, Form, InsiraSuaMatrcula, InsiraUmaSenha, InsiraASenha, InputMatricula, InputSenha1, InputSenha, ButtonCadastrar, ButtonBack }