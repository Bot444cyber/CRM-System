'use client';

import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Target, Users, Zap, Building } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const values = [
    {
        title: "Everything in One Place",
        description: "Why pay for a separate website builder, calendar, and CRM? We bring your storefront, history logs, and analytics together.",
        icon: <Zap className="w-6 h-6 text-white/70" />
    },
    {
        title: "Built for Everyone",
        description: "Our tools are made for real business owners, not just tech experts. Simple dashboards mean you spend less time clicking and more time selling.",
        icon: <Users className="w-6 h-6 text-white/70" />
    },
    {
        title: "Grow Naturally",
        description: "Whether you just need a simple business showcase or a full system to manage thousands of leads, our platform scales with you.",
        icon: <Target className="w-6 h-6 text-white/70" />
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/30 flex flex-col">
            <Header />

            <div className="flex-1 pt-32 pb-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">

                {/* Hero / Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-4xl mx-auto text-center mb-32 relative"
                >
                    {/* Glow effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/5 blur-[120px] rounded-full pointer-events-none" />

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter mb-8">
                        The simple way to <br />
                        <span className="text-white/40">run your entire business online.</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 leading-relaxed font-light relative z-10">
                        We started because managing a business shouldn't mean logging into five different apps. We built a single place for your website, contacts, numbers, and meetings.
                    </p>
                </motion.div>

                {/* Core Values Section */}
                <div className="mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold mb-12 text-center tracking-tight"
                    >
                        Our Core Values
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                key={index}
                                className="group bg-[#0c0c10] border border-white/10 rounded-3xl p-8 hover:bg-white hover:text-black hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-white/20 cursor-pointer"
                            >
                                <div className="mb-6 p-4 inline-block bg-white/5 group-hover:bg-black group-hover:text-white rounded-2xl border border-white/10 group-hover:border-black transition-all duration-500">
                                    {React.cloneElement(value.icon, { className: "w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-500" })}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-black transition-colors duration-500">{value.title}</h3>
                                <p className="text-neutral-400 group-hover:text-neutral-600 leading-relaxed transition-colors duration-500">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Quick Stats / By the numbers */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    className="border border-white/10 rounded-[2.5rem] p-8 sm:p-12 bg-[#0c0c10] relative overflow-hidden flex flex-col items-center text-center group hover:bg-white hover:text-black transition-all duration-700 hover:shadow-2xl hover:shadow-white/20 cursor-default"
                >
                    <Building className="w-12 h-12 text-white/20 group-hover:text-black/20 transition-colors duration-700 mb-8" />
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 group-hover:text-black transition-colors duration-700">NexusCRM by the numbers</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full max-w-4xl border-t border-white/10 group-hover:border-black/10 pt-8 sm:pt-12 transition-colors duration-700">
                        <div>
                            <div className="text-5xl font-bold mb-2 group-hover:text-black transition-colors duration-700">10k+</div>
                            <div className="text-neutral-400 group-hover:text-neutral-500 font-medium tracking-wide text-sm uppercase transition-colors duration-700">Active Customers</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2 group-hover:text-black transition-colors duration-700">$2B+</div>
                            <div className="text-neutral-400 group-hover:text-neutral-500 font-medium tracking-wide text-sm uppercase transition-colors duration-700">Revenue Managed</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2 group-hover:text-black transition-colors duration-700">99.9%</div>
                            <div className="text-neutral-400 group-hover:text-neutral-500 font-medium tracking-wide text-sm uppercase transition-colors duration-700">Platform Uptime</div>
                        </div>
                    </div>
                </motion.div>

                {/* Back to Home CTA */}
                <div className="mt-24 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 font-medium">
                        Back to Homepage
                    </Link>
                </div>

            </div>

            <Footer />
        </main>
    );
}
