import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session:{
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            crendentials: {},
            authorize: (credentials, req) => {
                const { matricula, senha } = credentials

                if(matricula !== 'admin' && senha !== 'admin'){
                    throw new Error('Credenciais inválidas')
                }

                return {id: 1, nome: 'admin', matricula: 'admin'}

            }
        })
    ],
    pages:{
        signIn: '/',
        error: '/login',
        singOut: '/login'
    }
}

export default NextAuth(authOptions)
