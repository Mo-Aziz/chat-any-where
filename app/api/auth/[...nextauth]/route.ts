import NextAuth from "next-auth";
import { authOptions } from "@/auth";

const handler = NextAuth(authOptions);
synchronize: false;
export { handler as GET, handler as POST };
