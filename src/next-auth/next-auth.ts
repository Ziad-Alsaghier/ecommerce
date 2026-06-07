import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

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
          const { token, ...userInfo } = await response.json();
          console.log("NextAuth Response: ", { ...userInfo, token });
          return {
            // Use JWT Token as the user ID or any unique identifier
            id: "",
            ...userInfo,
            token, // Include the token in the user object for later use
          };
        }
        return null;

        // Must Return an Object with id, name and email
      },
    }),
  ],
};
