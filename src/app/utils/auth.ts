import type { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/db/db';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import { Adapter } from 'next-auth/adapters';

const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }: any) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile.id;
      }
      return token;
    },
    async session({ session, token }: any ) {
      
      if (token) {
        session.accessToken = token.accessToken;
        session.user.id = token.sub;
      }
      const sessionObject = { 
        "user" : {
          "name" : session.user.name as string,
          "email" : session.user.email as string,
          "image" : session.user.image as string,
          "id" : session.user.id as string
        },
        "expires": session.expires as string,
        "accessToken": session.accessToken as string
      }

      return sessionObject;
    },
  },
  session : {
    strategy: 'jwt'
  },
  secret : process.env.AUTH_SECRET as string,
  
} satisfies NextAuthOptions;

export default authOptions;
