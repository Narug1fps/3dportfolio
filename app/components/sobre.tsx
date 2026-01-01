"use client"
import Link from "next/link"
import { devilBreeze } from "../fonts"

export default function Sobre() {
    return (
        <section id="sobre" className="w-full min-h-full relative flex items-center justify-center mt-40 md:mt-0 py-4 md:py-20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
                        {/* Title with Overlapping Effect */}
                        <div className="relative">
                            <div
                                className={`${devilBreeze.className} text-[#1a1a1a] text-4xl sm:text-6xl md:text-8xl font-bold relative z-10 before:content-[attr(data-before)] before:absolute before:z-[-1] before:text-[#666666] before:top-[0.05em] before:left-[0.05em] md:before:top-[0.1em] md:before:left-[0.1em] opacity-90`}
                                data-before="SOBRE"
                            >
                                SOBRE MIM
                            </div>
                        </div>

                        <p className="text-[#666666] md:text-lg max-w-lg leading-relaxed font-montserrat">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quasi placeat sint veritatis dolor quisquam consequuntur. Saepe doloremque corporis reprehenderit, quas mollitia nisi numquam voluptate ad doloribus ullam, ea eaque. Lorem
                        </p>

                        <Link href="/sobre" className="px-8 py-3 bg-[#1a1a1a] hover:bg-[#333333] text-white font-bold rounded-lg transition-colors duration-300">
                            Mais sobre mim
                        </Link>
                    </div>

                    {/* Right Column: 3D Placeholder */}
                    <div className="w-full h-0 md:h-[600px] relative flex items-center justify-center hidden md:flex">
                        <div className="w-full h-full  rounded-xl flex items-center justify-center ">
                            {/* Camera arrives here */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
