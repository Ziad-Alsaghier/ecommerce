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
import LoginForm from "./LoginForm";

export default function Login() {


    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

            <div className="container mx-auto max-w-6xl">

              <LoginForm/>
            </div>
        </div>
    );
}