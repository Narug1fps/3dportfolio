"use client"
import Link from "next/link"
import Header from "../components/header"
import { devilBreeze } from "../fonts"

export default function Galeria() {
    const allProjects = Array.from({ length: 12 }, (_, i) => i + 1)

    return (
        <div className="bg-[url(/bg.png)] h-screen w-full bg-[#0091FF]/10 m-0 p-0 text-sm font-2 overflow-x-hidden overflow-y-auto">
            <Header />

            <main className="container mx-auto px-4 py-32">
                {/* Page Title */}
                <div className="relative mb-16 text-center">
                    <div
                        className={`${devilBreeze.className} text-[#0091FF] text-6xl md:text-8xl font-bold relative z-10 before:content-[attr(data-before)] before:absolute before:z-[-1] before:text-[#004273] before:top-[0.05em] before:left-[0.05em]  md:before:left-[50%] md:before:-translate-x-[49.8%] opacity-90`}
                        data-before="GALERIA"
                    >
                        GALERIA
                    </div>
                    <p className="font-montserrat text-[#004E8A] mt-4 text-lg">
                        Explore todos os meus projetos
                    </p>
                </div>

                {/* Full Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((item) => (
                        <div key={item} className="group relative aspect-square bg-[#0091FF]/10 border border-[#0091FF]/30 rounded-xl overflow-hidden hover:bg-[#0091FF]/20 transition-all duration-300 cursor-pointer">
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                                <span className="text-[#0091FF] text-2xl font-bold">Projeto {item}</span>
                                <span className="text-[#004273]">Visualização 3D</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Back Navigation */}
                <div className="mt-16 text-center">
                    <Link href="/" className="px-8 py-3 bg-[#0091FF] text-white font-bold rounded-lg hover:bg-[#007acc] transition-colors duration-300 shadow-lg shadow-[#0091FF]/20">
                        Voltar para Home
                    </Link>
                </div>
            </main>
        </div>
    )
}
