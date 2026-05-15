"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { FiLogIn } from "react-icons/fi";

import { Input } from "@/components/ui/input";
import {
    Field,
    FieldLabel,
    FieldError,
} from "@/components/ui/field";

import LoginAction from "./LoginActions.actions";
import { ILoginData } from "@/Interfaces/auth.interface";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

/* ================= ZOD SCHEMA ================= */
const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Email is invalid"),

    password: z.string().min(8, "Minimum 8 characters"),

    remember: z.boolean().optional(),
});

export default function Login() {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
    });

    async function handleLogin(values: ILoginData) {
        const result = await LoginAction(values);
        console.log("result" + result);

        if (result) {
            toast.success("Login Success", {
                style: {
                    background: "#16a34a",
                    color: "#fff",
                    border: "1px solid #22c55e",
                    borderRadius: "12px",
                    padding: "12px 14px",
                },
            });

            router.push("/");
        } else {
            toast.error("Login Faild :(", {
                style: {
                    background: "#dc2626",
                    color: "#fff",
                    border: "1px solid #ef4444",
                    borderRadius: "12px",
                    padding: "12px 14px",
                },
            });
        }

        console.log("Data From Server Actions:", result);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

            {/* LEFT */}
            <div className="col-span-12 md:col-span-5 lg:col-span-6 space-y-8 pr-4">

                <Image
                    src="/images/signup/signup.png"
                    alt="logo"
                    width={500}
                    height={100}
                    priority
                    className="object-cover w-auto scale-x-[-1]"
                />

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mt-10">

                    <h1 className="text-center text-2xl font-semibold">
                        Welcome Back to FreshCart
                    </h1>

                    <p className="text-base mt-4 text-center font-medium text-gray-600">
                        Login to continue shopping your favorite fresh products.
                    </p>

                </div>
            </div>

            {/* RIGHT */}
            <div className="col-span-12 md:col-span-7 lg:col-span-6 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-50">

                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Sign In to Your Account
                </h2>

                <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">

                    {/* EMAIL */}
                    <Field className="mb-2">
                        <FieldLabel className="font-bold" htmlFor="email">
                            Email*
                        </FieldLabel>

                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="email"
                                    type="email"
                                    placeholder="ali@example.com"
                                    className="w-full"
                                />
                            )}
                        />

                        {errors.email && (
                            <FieldError className="font-black">
                                {errors.email.message}
                            </FieldError>
                        )}
                    </Field>

                    {/* PASSWORD */}
                    <Field className="mb-2">
                        <FieldLabel className="font-bold" htmlFor="password">
                            Password*
                        </FieldLabel>

                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="password"
                                    type="password"
                                    placeholder="Enter password"
                                    className="w-full"
                                />
                            )}
                        />

                        {errors.password && (
                            <FieldError className="font-black">
                                {errors.password.message}
                            </FieldError>
                        )}
                    </Field>

                    {/* REMEMBER */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">

                        <Controller
                            name="remember"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="checkbox"
                                    checked={field.value}
                                    onChange={(e) =>
                                        field.onChange(e.target.checked)
                                    }
                                    className="h-4 w-4 rounded border-gray-300 text-green-600"
                                />
                            )}
                        />

                        <label>Remember me</label>

                    </div>

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
                    >
                        <FiLogIn size={20} />
                        Sign In
                    </button>

                </form>

                <p className="text-center mt-8 text-sm text-gray-500">
                    Don’t have an account?{" "}
                    <Link href="/register" className="text-green-600 font-bold">
                        Sign Up
                    </Link>
                </p>

            </div>
        </div>
    );
}