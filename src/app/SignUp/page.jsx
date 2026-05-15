import React from 'react';
import { Star, Truck, ShieldCheck, UserPlus, Github } from 'lucide-react';
import Image from 'next/image';
import { FiClock, FiShield, FiShoppingCart } from 'react-icons/fi';

export const metadata = {
    title: "Sign Up",
};

export default function SignUp() {
    return (
        <div className='min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='container mx-auto max-w-6xl'>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                    {/* Left Side: Branding & Social Proof */}
                    <div className="col-span-12 md:col-span-5 lg:col-span-6 space-y-8 pr-4">

                        <div className="space-y-6 max-w-xl">
                            <Image
                                src='/images/signup/signup.png'
                                alt='logo'
                                width={500}
                                height={100}
                                priority
                                className="object-cover w-auto transform scale-x-[-1]"
                            />
                        </div>

                        {/* Testimonial Card */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mt-10">
                            <h1 className='text-center text-2xl font-semibold'>FreshCart - Your One-Stop Shop for Fresh Products</h1>
                            <p className="text-base md:text-l mt-4 text-center font-medium text-gray-600 leading-relaxed">
                                Join thousands of happy customers who trust FreshCart for their daily grocery needs.
                            </p>

                            <div className="features grid grid-cols-3 gap-4 mx-auto mt-4">

                                <span className="flex items-center justify-center gap-2 w-full text-sm font-medium">
                                    <FiShoppingCart className='text-green-600' size={15} />
                                    <span>Free Delivery</span>
                                </span>

                                <span className="flex items-center justify-center gap-2 w-full text-sm font-medium">
                                    <FiShield className='text-green-600' size={15} />
                                    <span > Free Delivery</span>
                                </span>

                                <span className="flex items-center justify-center gap-2 w-full text-sm font-medium">
                                    <FiClock className='text-green-600' size={15} />
                                    <span> Free Delivery</span>
                                </span>

                            </div>
                        </div>
                    </div>

                    {/* Right Side: Sign Up Form */}
                    <div className="col-span-12 md:col-span-7 lg:col-span-6 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-50">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800">Create Your Account</h2>
                            <p className="text-gray-500 mt-2">Start your fresh journey with us today</p>
                        </div>

                        {/* Social Buttons */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <button className="flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition text-blue-600">
                                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5" alt="Facebook" />
                                Facebook
                            </button>
                        </div>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200"></span></div>
                            <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-400 italic">or</span></div>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Name*</label>
                                <input type="text" placeholder="Ali" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Email*</label>
                                <input type="email" placeholder="ali@example.com" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Password*</label>
                                <input type="password" placeholder="create a strong password" title="At least 8 chars" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                                <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-400 w-1/4"></div>
                                </div>
                                <div className="flex justify-between text-[10px] mt-1 text-gray-400 uppercase tracking-wider">
                                    <span>Must be at least 8 characters with numbers and symbols</span>
                                    <span className="font-bold text-red-400">Weak</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password*</label>
                                <input type="password" placeholder="confirm your password" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number*</label>
                                <input type="tel" placeholder="+1 234 567 8900" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                            </div>

                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="terms" className="rounded text-green-600 focus:ring-green-500" />
                                <label htmlFor="terms" className="text-xs text-gray-600">
                                    I agree to the <span className="text-green-600 cursor-pointer">Terms of Service</span> and <span className="text-green-600 cursor-pointer">Privacy Policy</span> *
                                </label>
                            </div>

                            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-lg shadow-green-200">
                                <UserPlus size={20} />
                                Create My Account
                            </button>
                        </form>

                        <p className="text-center mt-8 text-sm text-gray-500">
                            Already have an account? <span className="text-green-600 font-bold cursor-pointer hover:underline">Sign In</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}