import NextAuth from "next-auth";
import { AuthConfig } from "@/next-auth/next-auth";

const handler = NextAuth(AuthConfig);

// function GET(req: Request) {
//   return handler(req);
// }

// function POST(req: Request) {
//   return handler(req);
// }


export { handler as GET, handler as POST };
