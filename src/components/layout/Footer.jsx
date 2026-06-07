import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react'; // Using lucide-react for icons
import Link from 'next/link';
import Image from 'next/image';
import Features from './Features';

export default function Footer() {
    return (
        <>
            <Features />
            <footer className="bg-[#0b1324] text-[#94a3b8] py-16 px-8 font-sans">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-white inline-block p-2 rounded-md mb-6">
                            <div className="flex items-center gap-2">
                                <button className="relative mx-1 -left-1 text-green-600 transition">

                                    <Image

                                        src='/images/logo.png'
                                        alt='logo'
                                        width={5}
                                        height={5}
                                        priority
                                        className="object-cover w-auto transform  scale-x-[-1]"

                                    />

                                </button>
                                <span className="text-[#1e293b] text-2xl font-bold">FreshCart</span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-8 max-w-sm">
                            FreshCart is your one-stop destination for quality products. From
                            fashion to electronics, we bring you the best brands at competitive
                            prices with a seamless shopping experience.
                        </p>

                        <div className="space-y-4 text-sm">
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-green-500" />
                                <span>+1 (800) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-green-500" />
                                <span>support@freshcart.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={18} className="text-green-500" />
                                <span>123 Commerce Street, New York, NY 10001</span>
                            </div>
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Shop</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">All Products</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Categories</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Brands</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Electronics</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Men's Fashion</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Women's Fashion</Link></li>
                        </ul>
                    </div>

                    {/* Account Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Account</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">My Account</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Order History</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Wishlist</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Shopping Cart</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Sign In</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Create Account</Link></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Support</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Shipping Info</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Track Order</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>

                </div>
            </footer>
        </>
    );
}