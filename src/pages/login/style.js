import { TextField, Button } from "@mui/material";
import {styled} from "@mui/material"

const Rupay = styled('h1')`
  margin: 0;
  color: #044569;
  position: absolute;
  font-style: italic;
  top: 271px;
  left: calc(50% - 69px);
  font-size: inherit;
  font-weight: 800;
  font-family: Roboto;  
  display: inline-block;
  width: 139px;
  height: 49px;
`;

const InputMatricula = styled(TextField)`
  border: none;
  border-radius: 7px;
  position: absolute;
  top: -40px;
  left: 0px;
`;
const InputSenha = styled(TextField)`
  border: none;
  border-radius: 7px;
  position: absolute;
  top: 30px;
  left: 0px;
  margin-top: 13px;
`;
const ButtonEntrar = styled(Button)`
  position: absolute;
  top: 120px;
  left: 0px;
  background-color:#044569 !important;
`;
const FormLogin = styled('form')`
  position: absolute;
  top: 408px;
  left: 55px;
  width: 279px;
  height: 174px;
`;
const AindaNoPossui = styled('span')`
  font-weight: 300;
`;
const Span = styled('span')`
  color: #000;
`;
const RegistreSe = styled('span')`
  font-weight: 600;
  color: #63a72e;
`;
const AindaNoPossuiContainer = styled('span')`
  position: absolute;
  top: 610px;
  left: 55px;
  font-size: 12px;
  text-align: left;
  display: inline-block;
  width: 279px;
  height: 34px;
  cursor: pointer;
`;
const LoginChild = styled('img')`
  position: absolute;
  top: 149px;
  left: calc(50% - 87px);
  border-radius: 7px;
  width: 174px;
  height: 101px;
`;
const LoginRoot = styled('div')`
  position: relative;
  /* background-color: #044569; */
  width: 100%;
  height: 844px;
  overflow: hidden;
  text-align: center;
  font-size: 40px;
  color:'#044569';
  @media screen and (max-width: 428px) {
    width: 390px;
    height: 844px;
  }
`;


export {LoginRoot,LoginChild, AindaNoPossuiContainer, RegistreSe, Span, AindaNoPossui, FormLogin, ButtonEntrar, InputSenha, InputMatricula, Rupay}