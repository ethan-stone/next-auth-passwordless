import NextAuth, { type NextAuthOptions } from "next-auth";
import { env } from "../../../env/server.mjs";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import EmailProvider from "next-auth/providers/email";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(db.connect()),
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    }
  },
  // Configure one or more authentication providers
  providers: [
    EmailProvider({})
    // ...add more providers here
  ]
};

export default NextAuth(authOptions);
