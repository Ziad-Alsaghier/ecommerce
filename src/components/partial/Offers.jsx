'use client';
import React from 'react';
import { MoveRight, Flame, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';

const OfferCard = ({
    title,
    subtitle,
    discount,
    code,
    variant = 'green',
    badgeText,
    badgeIcon: BadgeIcon,
    buttonText
}) => {
    const themes = {
        green: "bg-emerald-600 from-emerald-500 to-emerald-700",
        orange: "bg-gradient-to-r from-orange-400 via-orange-500 to-rose-500"
    };
    //  In This section I will Use New Package For Animation Called Framer Motion To Make The Cards Appear With A Smooth Fade And Slide Effect When They Come Into View. This Will Add A Nice Touch Of Interactivity And Make The Offers Section More Engaging For Users. 
    return (
        <Card className={`relative overflow-hidden border-none p-8 text-white min-h-60 flex flex-col justify-between transition-transform hover:scale-[1.01] ${themes[variant]}`}>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-black/5 rounded-full blur-xl" />

            <div className="relative z-10 space-y-4">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium">
                    {BadgeIcon && <BadgeIcon size={14} className="fill-current" />}
                    {badgeText}
                </div>

                <div>
                    <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                    <p className="text-white/90 text-sm mt-1">{subtitle}</p>
                </div>

                {/* Discount Section */}
                <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold">{discount} OFF</span>
                    <p className="text-xs font-medium opacity-90">
                        Use code: <span className="font-bold uppercase">{code}</span>
                    </p>
                </div>
            </div>

            <div className="relative z-10 pt-4">
                <Button
                    variant="secondary"
                    className="rounded-full px-6 py-6 h-auto text-md font-semibold text-emerald-900 hover:bg-white group"
                >
                    {buttonText}
                    <MoveRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
        </Card>
    );
};

export default function Offers() {
    return (
        <section className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }} // Animates when 30% of the card is visible
            >
                <OfferCard
                    variant="green"
                    badgeIcon={Flame}
                    badgeText="Deal of the Day"
                    title="Fresh Organic Fruits"
                    subtitle="Get up to 40% off on selected organic fruits"
                    discount="40%"
                    code="ORGANIC40"
                    buttonText="Shop Now"
                />
            </motion.div>


            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <OfferCard
                    variant="orange"
                    badgeIcon={Sparkles}
                    badgeText="New Arrivals"
                    title="Exotic Vegetables"
                    subtitle="Discover our latest collection of premium vegetables"
                    discount="25%"
                    code="FRESH25"
                    buttonText="Explore Now"
                />
            </motion.div>
        </section>
    );
}