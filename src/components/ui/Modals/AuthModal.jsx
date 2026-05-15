"use client";

import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function AuthModal({ onClose }) {
    const router = useRouter();

    function loginWithGoogle() {
        // later connect to NextAuth or API
        console.log("Google login");
    }

    function loginWithFacebook() {
        console.log("Facebook login");
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl w-[340px] text-center space-y-4">

                <h2 className="text-lg font-bold">Login Required</h2>

                <p className="text-gray-600 text-sm">
                    You need to login or create an account to continue.
                </p>

                {/* 🔵 Social login */}
                <div className="space-y-2">
                    <button
                        onClick={loginWithGoogle}
                        className="w-full cursor-pointer flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-50"
                    >
                        <FcGoogle size={20} />
                        Continue with Google
                    </button>

                    <button
                        onClick={loginWithFacebook}
                        className="w-full cursor-pointer flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        <FaFacebook size={20} />
                        Continue with Facebook
                    </button>
                </div>

                <div className="text-gray-400 text-sm">OR</div>

                {/* 🟢 Email login */}
                <div className="flex gap-2">
                    <button
                        onClick={() => router.push("/auth/login")}
                        className="flex-1 bg-green-600 cursor-pointer text-white py-2 rounded-lg"
                    >
                        Login
                    </button>

                    <button
                        onClick={() => router.push("/auth/register")}
                        className="flex-1 cursor-pointer  bg-gray-200 py-2 rounded-lg"
                    >
                        Sign Up
                    </button>
                </div>

                <button onClick={onClose} className="text-sm cursor-pointer text-gray-500">
                    Cancel
                </button>
            </div>
        </div>
    );
}