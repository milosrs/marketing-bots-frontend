import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"
import type {JWT} from 'next-auth/jwt'
import type {User, Account, Session, Awaitable} from 'next-auth/core/types'

interface JWTData {
  token: JWT,
  user?: User,
  account?: Account,
}

interface SessionData {
  session: Session, 
  token: JWT, 
  user?: User,
}

export default NextAuth({
  providers: [
    KeycloakProvider({
      clientId: 'marketing-bots-frontend',
      clientSecret: 'OvxfdDXRVRVVS7MLkkM8cgr41ilPPE8J',
      authorization: 'http://localhost:8080/auth',
      issuer: 'http://localhost:8080/realms/master',
    })
  ],
  callbacks: {
    jwt: (data: JWTData): Awaitable<JWT> => {
      return data.token
    },
    session: (data: SessionData): Awaitable<Session> => {
      return data.session
    },
  },
  events: {
    signOut: (message: any): Awaitable<void> => {
      console.log("I have signed out: ", message)
    }
  },
  secret: "mysecret",
})