// hooks/useAuth.ts
import { useSession } from "next-auth/react";

export function useAuth() {
  const { data, status } = useSession();

  const isLoggedIn = status === "authenticated";
  const isLoading = status === "loading";
  const user = data?.user;

  return {
    user,
    status,
    isLoggedIn,
    isLoading,
  };
}