import { z } from "zod";
import { ButtonConfirm, InputCode, ButtonBack, Form, DigiteOCdigo, HeadChild, Rupay, Head, ConfirmaoRoot} from "./style"; 
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";


const creatcodeSchema = z.object({
    codigo: z.string().nonempty("O código é obrigatorio").min(9, "O código deve ter 9 caracteres"),
})

export default function VerifyCode() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(creatcodeSchema)
    })

    async function userVerficarCodigo(event) {
        console.log(event)
    }

    return (
    <ConfirmaoRoot>
        <Head>
            <HeadChild alt="" src="/logo_rupay.svg" />
            <Rupay>RUPay</Rupay>
            <Link href="/login">
                <ButtonBack fontSize="large"/>
            </Link>
        </Head>
        <Form onSubmit={handleSubmit(userVerficarCodigo)}>
            <DigiteOCdigo>
                Digite o código de confirmação que foi enviado para seu email
                institucional:
            </DigiteOCdigo>
            
            <InputCode
            fullWidth
            color="primary"
            variant="outlined"
            type="number"
            label="Digite o codigo"
            size="large"
            {...register('codigo')}
            error={!!errors.codigo}
            helperText={errors?.codigo?.message}
            />

            <ButtonConfirm
            sx={{ width: 300 }}
            variant="contained"
            name="button_confirm"
            size="large"
            fullWidth
            type="submit"
            >
                Confirmar
            </ButtonConfirm>
        </Form>

    </ConfirmaoRoot>
  );
};
