'use client';

import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';
import { ShoppingCart, LineChart, Users, History, Settings, CalendarClock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const products = [
    {
        title: "Business Showcases",
        description: "Launch stunning, high-performance websites to showcase your business. Perfect for everything from simple product pages to full-scale E-Commerce storefronts.",
        icon: <ShoppingCart className="w-6 h-6 text-white" />,
        features: ["E-Commerce Ready", "Custom Themes", "Mobile Optimized"],
        tag: "Popular"
    },
    {
        title: "Analytics Dashboard",
        description: "Make data-driven decisions with our comprehensive business dashboards. Visualize trends, track KPIs, and turn raw data into actionable insights.",
        icon: <LineChart className="w-6 h-6 text-white" />,
        features: ["Real-time Metrics", "Custom Reports", "Data Export"],
        tag: "Core"
    },
    {
        title: "Lead Management",
        description: "Capture, nurture, and convert more leads. Our centralized pipeline ensures you never miss a follow-up and perfectly tracks the customer journey.",
        icon: <Users className="w-6 h-6 text-white" />,
        features: ["Pipeline Tracking", "Automated Follow-ups", "Lead Scoring"],
        tag: "Growth"
    },
    {
        title: "Contact & History Log",
        description: "Maintain a rigorous, universally accessible database of every customer interaction. Securely store contact details, communication history, and transaction records.",
        icon: <History className="w-6 h-6 text-white" />,
        features: ["Interaction Timeline", "Transaction Logs", "Secure Storage"],
        tag: "Essential"
    },
    {
        title: "Workflow Automation",
        description: "Eliminate repetitive tasks by building automated logic rules. Connect your storefront, CRM, and analytics to run your business on autopilot.",
        icon: <Settings className="w-6 h-6 text-white" />,
        features: ["Visual Builder", "Cross-app Sync", "Event Triggers"],
        tag: "Advanced"
    },
    {
        title: "Scheduling & Reminders",
        description: "Seamlessly book appointments and synchronize meetings. Automated email and SMS reminders ensure your clients never miss a session.",
        icon: <CalendarClock className="w-6 h-6 text-white" />,
        features: ["Calendar Sync", "Automated Alerts", "Booking Pages"],
        tag: "New"
    }
];

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/30 flex flex-col">
            <Header />

            <div className="flex-1 pt-32 pb-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-24 relative"
                >
                    {/* Subtle glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/5 blur-[100px] rounded-full pointer-events-none" />

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 relative z-10">
                        Tools built for <br />
                        <span className="text-white/40">hyper-growth.</span>
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed relative z-10">
                        Discover our suite of interconnected products designed to scale your revenue operations without the usual complexity.
                    </p>
                </motion.div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            key={index}
                            className="group relative bg-[#0c0c10] border border-white/10 rounded-3xl p-8 hover:bg-white hover:text-black hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col cursor-pointer shadow-lg hover:shadow-white/20"
                        >
                            {/* Hover Gradient (Hidden on hover cause bg goes white) */}
                            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-500">
                                    {React.cloneElement(product.icon, { className: "w-6 h-6 group-hover:text-white transition-colors duration-500" })}
                                </div>
                                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 bg-white/10 text-white/70 group-hover:bg-black/10 group-hover:text-black/70 group-hover:border-black/10 rounded-full border border-white/5 transition-colors duration-500">
                                    {product.tag}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-black transition-colors duration-500">{product.title}</h3>
                            <p className="text-neutral-400 group-hover:text-neutral-600 mb-8 flex-1 relative z-10 leading-relaxed transition-colors duration-500">
                                {product.description}
                            </p>

                            <div className="space-y-3 mb-8 relative z-10">
                                {product.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-neutral-300 group-hover:text-neutral-700 transition-colors duration-500">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-black/40 transition-colors duration-500" />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-white/10 group-hover:bg-black group-hover:text-white rounded-full py-3 px-6 transition-all duration-500 relative z-10 w-full hover:scale-105 active:scale-95">
                                Explore product
                                <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-500" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>

            <Footer />
        </main>
    );
}
