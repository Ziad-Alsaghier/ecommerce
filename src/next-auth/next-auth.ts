import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const AuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials", // Sign With Credentials
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Your Password",
        },
      },
      authorize: async function (credentials) {
        const response = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        if (response.ok) {
          const { token, user } = await response.json();
          console.log("NextAuth Response: ", { user, token });
          const userData = jwtDecode(token);
          return {
            // Use JWT Token as the user ID or any unique identifier
            id: userData?.id,
            name: user.name,
            email: user.email,
            userToken: token, // Include the token in the user object for later use
          };
        }
        return null;

        // Must Return an Object with id, name and email
      },
    }),
  ],

  jwt: {
    maxAge: 60 * 60 * 24,
  },
  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
    jwt: function (params) {
      console.log("Params From JWT :  ");
      console.log(params);
      if (params.user) {
        params.token.userToken = params.user.userToken;
        params.token.id = params.user.id;
      }
      return params?.token;
    },

    session: function (params) {
      console.log("Sessions v2 : ");
      console.log(params.session);

      params.session.user.id = params.token.id;
      params.session.user.userToken = params.token.userToken;

      return params.session;
    },
  },
};
