"use client";

import React from 'react';
import { useForm } from "react-hook-form";
import { UserPlus } from 'lucide-react';
import Image from 'next/image';
import { FiClock, FiShield, FiShoppingCart } from 'react-icons/fi';

import RegisterForm from "./RegisterForm";
export default function Register() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        // send API request here
    };

    const password = watch("password");

    return (
        <div className='min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='container mx-auto max-w-6xl'>
                <RegisterForm />
            </div>
        </div>
    );
}