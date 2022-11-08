import { login, signup } from "api";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {

  secret: process.env.NEXTAUTH_SECRET,

  providers: [

    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",

      async authorize(credentials, req) {

        if (credentials == null) return null;
        /**
         * credentials is defined in the config above.
         * We can expect it contains two properties: `email` and `password`
         */

        const { type } = credentials;

        if (type === 'register') {
          try {
            const { username, email, password } = credentials;
            const { data } = await signup({ username, email, password });
            return { jwt: data.jwt, user: data?.user };

          } catch (error) {
            console.warn(error);
          }

        } else {

          try {
            const { email, password } = credentials;
            const { data } = await login({ identifier: email, password: password });
            // console.log('Easin Webpro user login', data);
            return { jwt: data.jwt, user: data?.user };
          } catch (error) {
            console.warn(error);
          }
        }

      }
    })],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.jwt = user.jwt;
        token.user = user.user; /* ### */
      }
      return token;
    },

    session: async ({ session, token }) => {
      session.id = token.id;
      session.jwt = token.jwt;
      session.user = token.user;
      return session;
    },

  },

  session: {
    jwt: true
  },


  pages: {
    signIn: '/auth/login',
    newUser: '/auth/register',
    // New users will be directed here on first sign in (leave the property out if not of interest)
    // signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
  }

}

export default NextAuth(authOptions);