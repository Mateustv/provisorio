import {CadastroRoot, Head, HeadChild, Rupay, CrieSuaConta, Form, InsiraSuaMatrcula, InsiraUmaSenha, InsiraASenha, InputMatricula, InputSenha1, InputSenha, ButtonCadastrar, Iconbutton1} from './style'


function onButtonClick() {
    null
}

export default function SingUp() {
    return (
        <CadastroRoot>
            <Head>
                <HeadChild alt="logo" src="/logo_rupay.svg" />
                <Rupay>RUPay</Rupay>
                <Iconbutton1 fontSize="large" onClick={onButtonClick}>
                </Iconbutton1>
            </Head>

            <Form method="post">
                <InsiraSuaMatrcula>
                    Insira sua matrícula:
                </InsiraSuaMatrcula>
                <InputMatricula
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    type="text"
                    name="input_matricula"
                    label="Insira sua matricula"
                    size="large"
                    required
                />
                <InsiraUmaSenha>
                    Insira uma senha:
                </InsiraUmaSenha>
                <InputSenha1
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    type="password"
                    name="input_senha_1"
                    label="Insira uma senha:"
                    size="large"
                    required
                />

                <InsiraASenha>
                    Insira a senha novamente:
                </InsiraASenha>
                <InputSenha
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    type="password"
                    name="input_senha"
                    label="Insira a senha novamente:"
                    size="large"
                    required
                />


                <ButtonCadastrar
                    sx={{ width: 279 }}
                    variant="contained"
                    name="button_cadastrar"
                    size="large"
                >
                    Cadastrar
                </ButtonCadastrar>
            </Form>
            <CrieSuaConta>Crie sua conta</CrieSuaConta>
        </CadastroRoot>
    );
};
