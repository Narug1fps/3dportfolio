"use client"
import Link from "next/link"
import { devilBreeze } from "../fonts"

export default function Contato() {
    return (
        <section id="contato" className="w-full  md:mb-0 relative flex items-center text-white  justify-center  overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Contact Form */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 w-full">
                        {/* Title */}
                        <div className="relative mb-4">
                            <div
                                className={`${devilBreeze.className} text-[#1a1a1a] text-4xl sm:text-6xl md:text-8xl font-bold relative z-10 before:content-[attr(data-before)] before:absolute before:z-[-1] before:text-[#666666] before:top-[0.05em] before:left-[0.05em] md:before:top-[0.1em] md:before:left-[0.1em] opacity-90`}
                                data-before="CONTATO"
                            >
                                CONTATO
                            </div>
                        </div>

                        <div className="w-full max-w-lg space-y-6 font-montserrat hidden md:block border border-[#1a1a1a]/30 rounded-xl p-8 bg-[#1a1a1a]/5 backdrop-blur-sm">
                            {/* Email */}
                            <div className="flex justify-between items-end border-b border-dashed border-[#1a1a1a]/30 pb-2 group hover:border-[#1a1a1a] transition-colors">
                                <span className="text-[#1a1a1a] font-bold text-xl uppercase tracking-wider">Email</span>
                                <span className="text-[#666666] group-hover:text-[#1a1a1a] transition-colors text-right">test@gmail.com</span>
                            </div>

                            {/* Phone */}
                            <div className="flex justify-between items-end border-b border-dashed border-[#1a1a1a]/30 pb-2 group hover:border-[#1a1a1a] transition-colors">
                                <span className="text-[#1a1a1a] font-bold text-xl uppercase tracking-wider">Telefone</span>
                                <span className="text-[#666666] group-hover:text-[#1a1a1a] transition-colors text-right">(62) 99999-9999</span>
                            </div>

                            {/* Website */}
                            <div className="flex justify-between items-end border-b border-dashed border-[#1a1a1a]/30 pb-2 group hover:border-[#1a1a1a] transition-colors">
                                <span className="text-[#1a1a1a] font-bold text-xl uppercase tracking-wider">Site</span>
                                <span className="text-[#666666] group-hover:text-[#1a1a1a] transition-colors text-right">teste.com</span>
                            </div>

                            {/* Instagram */}
                            <div className="flex justify-between items-end border-b border-dashed border-[#1a1a1a]/30 pb-2 group hover:border-[#1a1a1a] transition-colors">
                                <span className="text-[#1a1a1a] font-bold text-xl uppercase tracking-wider">Instagram</span>
                                <span className="text-[#666666] group-hover:text-[#1a1a1a] transition-colors text-right">@teste</span>
                            </div>
                        </div>

                        {/* Mobile View - Stacked */}
                        <div className="w-full max-w-lg space-y-6 font-montserrat md:hidden border border-[#1a1a1a]/30 rounded-xl p-6 bg-[#1a1a1a]/5 backdrop-blur-sm">
                            {/* Email */}
                            <div className="flex flex-col items-center space-y-2 border-b border-dashed border-[#1a1a1a]/30 pb-4">
                                <span className="text-[#1a1a1a] font-bold text-xl uppercase tracking-wider">Email</span>
                                <span className="text-[#666666]">teste@gmail.com</span>
                            </div>
                            {/* Phone */}
                            <div className="flex flex-col items-center space-y-2 border-b border-dashed border-[#1a1a1a]/30 pb-4">
                                <span className="text-[#1a1a1a] font-bold text-xl uppercase tracking-wider">Telefone</span>
                                <span className="text-[#666666]">(62) 99999-9999</span>
                            </div>
                            {/* Website */}
                            <div className="flex flex-col items-center space-y-2 border-b border-dashed border-[#1a1a1a]/30 pb-4">
                                <span className="text-[#1a1a1a] font-bold text-xl uppercase tracking-wider">Site</span>
                                <span className="text-[#666666]">teste.com</span>
                            </div>
                            {/* Youtube */}
                            <div className="flex flex-col items-center space-y-2 border-b border-dashed border-[#1a1a1a]/30 pb-4">
                                <span className="text-[#1a1a1a] font-bold text-xl uppercase tracking-wider">Youtube</span>
                                <span className="text-[#666666]">@teste</span>
                            </div>
                        </div>
                        <Link href="/contato" className="px-8 py-3  justify-end items-end border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-bold rounded-lg transition-colors duration-300">
                            Entre em contato
                        </Link>
                    </div>

                </div>
            </div>

        </section>
    )
}
