"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UserPlus } from "lucide-react";
import Image from "next/image";
import {
    FiClock,
    FiShield,
    FiShoppingCart,
} from "react-icons/fi";
import { Input } from "@/components/ui/input";
import {
    Field,
    FieldLabel,
} from "@/components/ui/field";
import RegisterAction from "./RegisterAction.actions";
import { IRegisterData } from "@/Interfaces/auth.interface";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
/* ================= ZOD SCHEMA ================= */
const registerSchema = z
    .object({
        name: z.string().min(3, {
            message: "Minimum 3 characters",
        }),

        email: z.string().email({
            message: "Invalid email",
        }),

        password: z.string().min(8, {
            message: "Minimum 8 characters",
        }),

        rePassword: z.string(),

        phone: z.string().optional(),

        terms: z.boolean().refine((val) => val === true, {
            message: "You must accept terms",
        }),
    })
    .refine((data) => data.password === data.rePassword, {
        message: "Passwords do not match",
        path: ["rePassword"],
    });
type FieldErrorProps = {
    className?: string;
    children: React.ReactNode;
};

export function FieldError({ className, children }: FieldErrorProps) {
    return <p className={className}>{children}</p>;
}
export default function RegisterForm() {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: "",
            terms: false,
        },
    });


    async function handleRegister(values: IRegisterData) {
        const result = await RegisterAction(values);

        if (result.success) {
            toast.success("Register Success", {
                style: {
                    background: "#16a34a", // green-600
                    color: "#fff",
                    border: "1px solid #22c55e",
                    borderRadius: "12px",
                    padding: "12px 14px",
                },
            });

            router.push("/auth/login");
        } else {
            toast.error("User Already Exists :(", {
                style: {
                    background: "#dc2626", // red-600
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

            {/* LEFT SIDE */}
            <div className="col-span-12 md:col-span-5 lg:col-span-6 space-y-8 pr-4">

                <div className="space-y-6 max-w-xl">
                    <Image
                        src="/images/signup/signup.png"
                        alt="signup"
                        width={500}
                        height={100}
                        priority
                        className="object-cover w-auto scale-x-[-1]"
                    />
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mt-10">

                    <h1 className="text-center text-2xl font-semibold">
                        FreshCart - Your One-Stop Shop for Fresh Products
                    </h1>

                    <p className="text-base mt-4 text-center font-medium text-gray-600">
                        Join thousands of happy customers.
                    </p>

                    <div className="grid grid-cols-3 gap-4 mx-auto mt-4">

                        <span className="flex items-center justify-center gap-2 text-sm font-medium">
                            <FiShoppingCart className="text-green-600" size={15} />
                            Free Delivery
                        </span>

                        <span className="flex items-center justify-center gap-2 text-sm font-medium">
                            <FiShield className="text-green-600" size={15} />
                            Secure
                        </span>

                        <span className="flex items-center justify-center gap-2 text-sm font-medium">
                            <FiClock className="text-green-600" size={15} />
                            Fast
                        </span>

                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-span-12 md:col-span-7 lg:col-span-6 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-50">

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Create Your Account
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Start your fresh journey with us today
                    </p>
                </div>

                <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">

                    {/* NAME */}
                    <Field className={""}>
                        <FieldLabel className={"font-black"} htmlFor="name">Name*</FieldLabel>

                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type={"name"}
                                    className={"font-black"}
                                    {...field}
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            )}
                        />

                        {errors.name && (
                            <FieldError>{errors.name.message}</FieldError>
                        )}
                    </Field>

                    {/* EMAIL */}
                    <Field className={""}>
                        <FieldLabel className={"font-black"} htmlFor="email">Email*</FieldLabel>

                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type={"email"}
                                    className={"font-black"}
                                    {...field}
                                    id="email"
                                    placeholder="Enter your email"
                                />
                            )}
                        />

                        {errors.email && (
                            <FieldError>{errors.email.message}</FieldError>
                        )}
                    </Field>

                    {/* PASSWORD */}
                    <Field className={""}>
                        <FieldLabel className={"font-black"} htmlFor="password">Password*</FieldLabel>

                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type={"password"}
                                    className={"font-black"}
                                    {...field}
                                    id="password"
                                    placeholder="Enter password"
                                />
                            )}
                        />

                        {errors.password && (
                            <FieldError>{errors.password.message}</FieldError>
                        )}
                    </Field>

                    {/* CONFIRM PASSWORD */}
                    <Field className={""}>
                        <FieldLabel className={"font-black"} htmlFor="rePassword">
                            Confirm Password*
                        </FieldLabel>

                        <Controller
                            name="rePassword"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type={"password"}
                                    className={"font-black"}
                                    {...field}
                                    id="rePassword"
                                    placeholder="Confirm password"
                                />
                            )}
                        />

                        {errors.rePassword && (
                            <FieldError>
                                {errors.rePassword.message}
                            </FieldError>
                        )}
                    </Field>

                    {/* PHONE */}
                    <Field className={""}>
                        <FieldLabel className={"font-black"} htmlFor="phone">Phone*</FieldLabel>

                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type={"phone"}
                                    className={"font-black"}
                                    {...field}
                                    id="phone"
                                    placeholder="Enter phone number"
                                />
                            )}
                        />
                    </Field>

                    {/* TERMS */}
                    <div className="flex items-center gap-2">

                        <Controller
                            name="terms"
                            control={control}
                            render={({ field }) => (
                                <input
                                    id="terms"
                                    type="checkbox"
                                    checked={!!field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-300 text-green-600"
                                />
                            )}
                        />

                        <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer">
                            I agree to Terms & Privacy
                        </label>

                    </div>

                    {errors.terms && (
                        <p className="text-red-500 text-xs">
                            {errors.terms.message}
                        </p>
                    )}

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
                    >
                        <UserPlus size={20} />
                        Create My Account
                    </button>

                </form>
            </div>
        </div>
    );
}