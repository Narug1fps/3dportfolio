"use client"
import Link from "next/link"
import { devilBreeze } from "../fonts"


export default function Portfolio() {
    const projects = [1, 2, 3, 4] // Placeholder for project items

    return (
        <section id="portfolio" className="w-full min-h-full relative flex items-center justify-center pb-60 py-4 md:pt-20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


                    {/* Right Column: Featured 3D Model Placeholder (Now Left) */}
                    <div className="w-full h-0 md:h-[700px] relative flex items-center justify-center hidden md:flex">
                        <div className="w-full h-full rounded-xl flex items-center justify-center relative">
                            {/* Camera arrives here */}
                        </div>
                    </div>

                    {/* Left Column: Text & Gallery (Now Right) */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-12">
                        {/* Title */}
                        <div className="relative">
                            <div
                                className={`${devilBreeze.className} text-[#0091FF] text-4xl sm:text-6xl md:text-8xl font-bold relative z-10 before:content-[attr(data-before)] before:absolute before:z-[-1] before:text-[#004273] before:top-[0.05em] before:left-[0.05em] md:before:top-[0.1em] md:before:left-[0.1em] opacity-90`}
                                data-before="PORTFOLIO"
                            >
                                PORTFOLIO
                            </div>
                        </div>

                        {/* Image Gallery Grid */}
                        <div className="grid grid-cols-2 gap-4 w-full">
                            {projects.map((item) => (
                                <div key={item} className="aspect-square bg-[#0091FF]/10 border border-[#0091FF]/30 rounded-lg flex items-center justify-center hover:bg-[#0091FF]/20 transition-all cursor-pointer">
                                    <span className="text-[#0091FF]/50 font-bold">Projeto {item}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/portfolio" className="px-8 py-3 border border-[#0091FF] text-[#0091FF] hover:bg-[#0091FF] hover:text-white font-bold rounded-lg transition-colors duration-300">
                            Ver todos os projetos
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}
