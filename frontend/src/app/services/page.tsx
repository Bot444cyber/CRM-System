'use client';

import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Website & Store Setup",
        description: "Let our design experts build your stunning business showcase or E-Commerce store from scratch. We handle the design, domains, and payment setups.",
        benefits: ["Custom Website Design", "E-Commerce Setup", "SEO Optimization"]
    },
    {
        title: "Data & Contact Import",
        description: "Moving from spreadsheets or another system? We will safely migrate your entire history logs, contacts, and transaction records into your new dashboard.",
        benefits: ["Zero Data Loss", "Spreadsheet Uploads", "Clean Contact Records"]
    },
    {
        title: "Custom Workspace Training",
        description: "Get personalized training for you and your team. We will teach you how to manage leads, read your analytics charts, and set up your booking calendars.",
        benefits: ["1-on-1 Training Sessions", "Dashboard Setup", "Scheduling Configurations"]
    }
];

export default function ServicesPage() {
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
                    className="max-w-3xl mb-24"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter mb-8">
                        We set up everything.<br />
                        <span className="text-white/40">You run your business.</span>
                    </h1>
                    <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
                        Need help getting started? Our expert team can design your website, set up your dashboards, and import your contacts so you can start growing on day one.
                    </p>
                </motion.div>

                {/* Services List */}
                <div className="space-y-6">
                    {services.map((service, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                            key={index}
                            className="group bg-[#0c0c10] border border-white/10 rounded-[2rem] p-8 md:p-12 hover:bg-white hover:text-black hover:scale-[1.01] transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-white/20 cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start relative z-10">
                                <div className="md:w-1/2">
                                    <h2 className="text-3xl font-bold mb-4 group-hover:text-black transition-colors duration-500">{service.title}</h2>
                                    <p className="text-neutral-400 group-hover:text-neutral-700 leading-relaxed text-lg transition-colors duration-500">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="md:w-1/2 grid grid-cols-1 gap-4 w-full">
                                    {service.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white/5 group-hover:bg-black/5 border border-white/5 group-hover:border-black/5 rounded-xl px-6 py-4 transition-colors duration-500">
                                            <CheckCircle2 className="w-5 h-5 text-white/50 group-hover:text-black/50 transition-colors duration-500" />
                                            <span className="font-medium text-white/90 group-hover:text-black/90 transition-colors duration-500">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                    className="mt-24 text-center bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:bg-white hover:text-black transition-all duration-500 hover:shadow-2xl hover:shadow-white/20"
                >
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 group-hover:bg-black/5 blur-[80px] rounded-full pointer-events-none transition-colors duration-500" />

                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 relative z-10 group-hover:text-black transition-colors duration-500">Ready to discuss your requirements?</h2>
                    <p className="text-sm sm:text-base text-neutral-400 group-hover:text-neutral-600 mb-8 relative z-10 transition-colors duration-500">Our solutions architects are available for a detailed technical consultation.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-white group-hover:bg-black text-black group-hover:text-white font-semibold rounded-full px-6 py-3 sm:px-8 sm:py-4 transition-all duration-500 hover:scale-105 active:scale-95 relative z-10">
                        Book a Consultation
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>

            </div>

            <Footer />
        </main>
    );
}
