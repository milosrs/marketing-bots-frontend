import NextAuth from 'next-auth'
import KeycloakProvider from 'next-auth/providers/keycloak'
import type { JWT } from 'next-auth/jwt'
import type { User, Account, Session, Awaitable } from 'next-auth/core/types'
import { env } from 'process'
import {authorizedRequest, post} from '../../../api/base'
import { getSession } from 'next-auth/react'
interface JWTData {
    token: JWT
    user?: User
    account?: Account
}

interface SessionData {
    session: Session
    token: JWT
    user?: User
}

interface LogoutMessage {
    session: Session,
    token: JWT,
}

export default NextAuth({
    providers: [
        KeycloakProvider({
            clientId: 'marketing-bots-frontend',
            clientSecret: 'OvxfdDXRVRVVS7MLkkM8cgr41ilPPE8J',
            authorization: 'http://localhost:8080/auth',
            issuer: 'http://localhost:8080/realms/master',
        }),
    ],
    callbacks: {
        jwt: (data: JWTData): Awaitable<JWT> => {
            if(data.user) {
                const url = env.NEXT_PUBLIC_BACKEND_SERVER_URL + '/auth/user/login'
                authorizedRequest(data.account?.access_token, {url}, post)
            } else {
                throw new Error("No user data present. Behavior will be undefined.")
            }
            return data.token
        },
        session: (data: SessionData): Awaitable<Session> => {
            return data.session
        },
    },
    events: {
        signOut: (message: LogoutMessage): Awaitable<void> => {
            const url = env.NEXT_PUBLIC_BACKEND_SERVER_URL + '/auth/user/logout'
            post({
                url: url,
                body: {email: message.session.user?.email},
            })
            .then(_ => console.log("Logout success"), r => console.log("Logout fail: ", r))
        },
    },
    secret: 'mysecret',
})
