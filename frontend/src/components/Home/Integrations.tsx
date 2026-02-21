"use client";

import React from 'react';
import { motion } from 'framer-motion';

// ─── Integration Tool Data ────────────────────────────────────────────────────
const integrations = [
    // Row 1
    { name: 'Stripe', category: 'Payments', color: '#635bff', icon: <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.32 2.525-3.293 2.525-5.705 0-4.111-2.503-5.91-6.591-7.332z" fillRule="evenodd" clipRule="evenodd" />, filled: true },
    { name: 'Slack', category: 'Communication', color: '#4a154b', icon: <><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A" /><path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0" /><path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D" /><path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E" /></>, filled: true },
    { name: 'HubSpot', category: 'CRM', color: '#ff7a59', icon: <path d="M22.446 9.389a5.277 5.277 0 0 0-2.287-1.662V5.715a1.992 1.992 0 0 0 1.102-1.791 2.003 2.003 0 0 0-2.003-2.003 2.003 2.003 0 0 0-2.003 2.003c0 .78.448 1.456 1.102 1.79V7.87a5.29 5.29 0 0 0-2.525.955L7.608 3.956a2.235 2.235 0 0 0 .085-.588A2.237 2.237 0 0 0 5.456 1.13a2.237 2.237 0 0 0-2.237 2.237 2.237 2.237 0 0 0 2.237 2.237c.388 0 .75-.1 1.065-.276l8.07 4.734a5.306 5.306 0 0 0-.62 2.472c0 1.228.42 2.36 1.12 3.26l-2.454 2.453a1.868 1.868 0 0 0-.51-.075 1.89 1.89 0 0 0-1.89 1.889 1.89 1.89 0 0 0 1.89 1.89 1.89 1.89 0 0 0 1.889-1.89c0-.178-.024-.35-.067-.515l2.43-2.43a5.28 5.28 0 0 0 3.266 1.127 5.306 5.306 0 0 0 5.306-5.306 5.28 5.28 0 0 0-.905-2.948h.015z" />, filled: true },
    { name: 'Notion', category: 'Productivity', color: '#ffffff', icon: <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.935l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933l3.222-.187z" fillRule="evenodd" clipRule="evenodd" />, filled: true },
    { name: 'Shopify', category: 'E-Commerce', color: '#96bf48', icon: <path d="M15.337 2.432s-.138-.069-.345-.138c-.069 0-.138-.069-.207-.069 0 0-.759-.138-1.31 1.172l-.069.207c-.483-.138-.966-.276-1.518-.276-1.31 0-1.931.897-2.069 1.793-.483-.069-1.103-.207-1.724-.483 0 0-1.793 2.483 1.034 3.862.138.069.276.138.414.207C9.26 9.952 8.916 11 9.26 12.278c1.379 3.241 5.517 4.758 5.517 4.758s1.103-3.172.621-4.827c-.138-.552-.414-1.103-.759-1.655.207 0 .345-.069.483-.138 1.172-.552.759-1.931.621-2.207.069.069.138.138.207.138.621.414.897 1.241.621 1.931l-.069.138c.414-.207.759-.483.966-.828.621-1.034.069-2.276-.552-2.897V4.5S16.992 4.569 17.2 2.5l-1.862-.069z" />, filled: true },
    { name: 'Salesforce', category: 'CRM', color: '#00a1e0', icon: <path d="M10.045 5.166a4.4 4.4 0 0 1 3.13-1.3c1.56 0 2.928.813 3.713 2.044a5.178 5.178 0 0 1 1.994-.4c2.883 0 5.118 2.358 5.118 5.266s-2.235 5.266-5.118 5.266a5.048 5.048 0 0 1-1.105-.122 3.764 3.764 0 0 1-3.348 2.08 3.737 3.737 0 0 1-1.648-.38 4.41 4.41 0 0 1-4.08 2.734 4.42 4.42 0 0 1-4.22-3.14A4.103 4.103 0 0 1 0 13.3c0-1.76 1.1-3.27 2.666-3.86a4.673 4.673 0 0 1-.12-1.074c0-2.584 2.078-4.682 4.638-4.682a4.6 4.6 0 0 1 2.861.982z" />, filled: true },
    { name: 'Gmail', category: 'Email', color: '#ea4335', icon: <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />, filled: true },
    { name: 'Zapier', category: 'Automation', color: '#ff4a00', icon: <path d="M14.974 11.985a9.04 9.04 0 0 1-.063 1.032l2.682 2.082a.64.64 0 0 1 .147.814l-2.538 4.394a.627.627 0 0 1-.774.272l-3.162-1.27a9.218 9.218 0 0 1-1.784 1.032l-.476 3.364A.628.628 0 0 1 8.386 24H3.311a.629.629 0 0 1-.621-.535l-.476-3.364a9.234 9.234 0 0 1-1.784-1.032l-3.163 1.27a.627.627 0 0 1-.773-.272L-5.044 15.67a.624.624 0 0 1 .147-.814l2.682-2.082a9.297 9.297 0 0 1 0-2.063L-4.897 8.63a.624.624 0 0 1-.147-.814l2.538-4.394a.627.627 0 0 1 .773-.272l3.163 1.27A9.218 9.218 0 0 1 3.214 3.39l.476-3.364A.628.628 0 0 1 4.31-.51h5.075c.303 0 .562.217.62.535l.476 3.364a9.234 9.234 0 0 1 1.784 1.032l3.162-1.27a.627.627 0 0 1 .774.272l2.538 4.394a.624.624 0 0 1-.147.814l-2.682 2.082c.041.34.063.684.063 1.032l.001-.76zM5.849 8.285a3.7 3.7 0 1 0 3.7 3.7 3.7 3.7 0 0 0-3.7-3.7z" />, filled: true },
    { name: 'QuickBooks', category: 'Accounting', color: '#2ca01c', icon: <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.75 18.188v1.5a.75.75 0 01-1.5 0v-1.5c-2.484-.348-4.5-2.363-4.5-4.938 0-.414.336-.75.75-.75s.75.336.75.75c0 1.898 1.533 3.438 3.75 3.75v-7.5c-2.484-.348-4.5-2.363-4.5-4.938 0-2.576 2.016-4.59 4.5-4.938v-1.5a.75.75 0 011.5 0v1.5c2.484.348 4.5 2.363 4.5 4.938 0 .414-.336.75-.75.75s-.75-.336-.75-.75c0-1.898-1.533-3.438-3.75-3.75v7.5c2.484.348 4.5 2.363 4.5 4.938 0 2.576-2.016 4.59-4.5 4.938z" />, filled: true },
    { name: 'Twilio', category: 'SMS/Voice', color: '#f22f46', icon: <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 20.4c-4.632 0-8.4-3.768-8.4-8.4S7.368 3.6 12 3.6s8.4 3.768 8.4 8.4-3.768 8.4-8.4 8.4zm4.68-11.04a1.68 1.68 0 1 1-3.36 0 1.68 1.68 0 0 1 3.36 0zm0 5.28a1.68 1.68 0 1 1-3.36 0 1.68 1.68 0 0 1 3.36 0zm-5.28-5.28a1.68 1.68 0 1 1-3.36 0 1.68 1.68 0 0 1 3.36 0zm0 5.28a1.68 1.68 0 1 1-3.36 0 1.68 1.68 0 0 1 3.36 0z" />, filled: true },
    { name: 'Zoom', category: 'Video', color: '#2D8CFF', icon: <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM8.799 8.4c-.77 0-1.4.63-1.4 1.4v4.8c0 .77.63 1.4 1.4 1.4h7.202c.77 0 1.4-.63 1.4-1.4V9.8c0-.77-.63-1.4-1.4-1.4H8.8zm9.401 1.8l.8-1.28v5.68l-.8-1.28V10.2z" />, filled: true },
    { name: 'GitHub', category: 'Dev Tools', color: '#ffffff', icon: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />, filled: true },
];

// ─── Single Integration Card ──────────────────────────────────────────────────
function IntegrationIcon({ name, category, color, icon, filled, delay }: {
    name: string; category: string; color: string; icon: React.ReactNode; filled: boolean; delay: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay }}
            className="group flex flex-col items-center gap-2.5 cursor-default"
        >
            <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center relative border border-white/8 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-lg"
                style={{ background: `${color}18`, boxShadow: `0 0 0 1px ${color}22` }}
            >
                {/* Glow on hover */}
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10 scale-110"
                    style={{ background: `${color}40` }}
                />
                <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    fill={filled ? color : 'none'}
                    stroke={filled ? 'none' : color}
                    strokeWidth={filled ? 0 : 1.5}
                >
                    {icon}
                </svg>
            </div>
            <div className="text-center">
                <p className="text-white/80 text-xs sm:text-sm font-medium leading-tight">{name}</p>
                <p className="text-white/30 text-[9px] sm:text-[10px] leading-tight mt-0.5">{category}</p>
            </div>
        </motion.div>
    );
}

// ─── Main Integrations Section ────────────────────────────────────────────────
export default function Integrations() {
    return (
        <section className="relative w-full bg-black py-20 sm:py-28 md:py-36 overflow-hidden">
            {/* Radial glow behind heading */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6">

                {/* ── Header ── */}
                <div className="text-center mb-14 sm:mb-20 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.06 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white mb-5"
                    >
                        Works with{' '}
                        <span className="text-white">
                            everything
                        </span>{' '}
                        you use
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.12 }}
                        className="text-base sm:text-lg md:text-xl text-white/45 max-w-2xl mx-auto font-light"
                    >
                        NexusCRM plugs directly into your existing tools. No more switching tabs.
                        100+ native integrations and growing.
                    </motion.p>
                </div>

                {/* ── Integration Grid ── */}
                <div className="relative">
                    {/* Left + Right edge fade */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-linear-to-r from-black to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-linear-to-l from-black to-transparent z-10" />

                    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-6 sm:gap-8 justify-items-center">
                        {integrations.map((item, i) => (
                            <div key={item.name} className="col-span-1 sm:col-span-1 lg:col-span-2">
                                <IntegrationIcon {...item} delay={i * 0.04} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Bottom CTA strip ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
                >
                    <p className="text-white/40 text-sm font-medium">
                        + 88 more integrations available
                    </p>
                    <div className="hidden sm:block w-px h-4 bg-white/10" />
                    <button className="text-sm font-semibold text-white/70 hover:text-black hover:bg-white px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 group border border-transparent hover:border-white">
                        Browse all integrations
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </motion.div>

                {/* ── Product screenshot / mock ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="mt-24 sm:mt-32 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.07]"
                    style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.04) inset, 0 40px 100px rgba(0,0,0,0.7)' }}
                >
                    {/* Top browser chrome bar */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#111115] border-b border-white/[0.07]">
                        <div className="w-3 h-3 rounded-full bg-red-500/70" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <div className="w-3 h-3 rounded-full bg-green-500/70" />
                        <div className="ml-4 flex-1 max-w-xs h-5 rounded-md bg-white/5 border border-white/5 flex items-center px-3">
                            <span className="text-[9px] text-white/20 font-mono">app.nexuscrm.com/dashboard</span>
                        </div>
                    </div>

                    {/* Dashboard image */}
                    <div className="relative bg-[#0a0a0e] aspect-video sm:aspect-2/1 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                            alt="NexusCRM Dashboard"
                            className="w-full h-full object-cover object-top opacity-60"
                        />
                        {/* Dark overlay vignette */}
                        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0e] via-[#0a0a0e]/30 to-transparent" />

                        {/* Floating stat cards */}
                        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-[#111115]/95 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl">
                            <p className="text-[9px] sm:text-xs text-white/40 mb-1">MRR This Month</p>
                            <p className="text-base sm:text-2xl font-bold text-white">$48,290</p>
                            <p className="text-[9px] sm:text-[10px] text-white/40 mt-0.5">↑ 22% from last month</p>
                        </div>

                        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-[#111115]/95 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl">
                            <p className="text-[9px] sm:text-xs text-white/40 mb-1">Active Deals</p>
                            <p className="text-base sm:text-2xl font-bold text-white">127</p>
                            <div className="flex gap-1 mt-2">
                                {[40, 65, 55, 80, 70, 90].map((h, i) => (
                                    <div key={i} className="w-1.5 sm:w-2 rounded-t-sm bg-white/20" style={{ height: `${h * 0.24}px` }} />
                                ))}
                            </div>
                        </div>

                        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-[#111115]/95 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl hidden sm:block">
                            <p className="text-xs text-white/40 mb-2">Pipeline Health</p>
                            <div className="flex gap-1.5">
                                {['Prospecting', 'Qualified', 'Proposal', 'Closed'].map((s, i) => (
                                    <div key={s} className="text-center">
                                        <div className="w-6 rounded-t-sm mb-1" style={{ height: `${[30, 52, 38, 64][i]}px`, background: `rgba(255,255,255,${0.1 + i * 0.1})` }} />
                                        <p className="text-[7px] text-white/30">{s}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Caption under screenshot */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-white/30 text-xs sm:text-sm mt-5"
                >
                    NexusCRM live dashboard — real-time across all your connected tools
                </motion.p>

            </div>
        </section>
    );
}
