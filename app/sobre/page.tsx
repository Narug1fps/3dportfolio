"use client"
import Header from "../components/header";
import { devilBreeze } from "../fonts"
import { Camera, Briefcase, Code2, Palette, Zap, ArrowRight, Star, Award, Heart } from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
    const skills = [
        { name: "Fotografia Digital", level: 95, icon: <Camera className="w-5 h-5" /> },
        { name: "Edição de Imagem", level: 90, icon: <Palette className="w-5 h-5" /> },
        { name: "Direção de Arte", level: 85, icon: <Zap className="w-5 h-5" /> },
        { name: "Pós-produção", level: 80, icon: <Code2 className="w-5 h-5" /> },
    ]

    const timeline = [
        {
            year: "2023 - Presente",
            title: "Fotógrafo Senior",
            company: "Studio Criativo",
            description: "Liderando projetos de fotografia publicitária para marcas nacionais."
        },
        {
            year: "2021 - 2023",
            title: "Fotógrafo Freelancer",
            company: "Autônomo",
            description: "Especializado em casamentos e eventos corporativos de alto padrão."
        },
        {
            year: "2019 - 2021",
            title: "Assistente de Fotografia",
            company: "Agência Focus",
            description: "Apoio técnico em ensaios externos e estúdio."
        }
    ]

    return (
        <div className="light-theme">
            <main className="min-h-full bg-white" style={{
                backgroundImage: 'url(/bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(255, 255, 255, 0.98)'
            }}>


                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                            <span className="text-[#0091FF] font-bold tracking-widest uppercase text-sm mb-4 animate-fade-in">A Arte do Olhar</span>
                            <h1 className={`${devilBreeze.className} text-[#004273] text-6xl sm:text-8xl md:text-9xl font-bold leading-none mb-8`}>
                                MINHA <span className="text-[#0091FF]">HISTÓRIA</span>
                            </h1>
                            <p className="text-gray-600 text-xl md:text-2xl font-medium leading-relaxed mb-12">
                                Capturando a essência do momento através de lentes que buscam a perfeição. Mais do que fotografia, entrego memórias eternizadas em pixels e sentimentos.
                            </p>
                        </div>
                    </div>
                </section>

                {/* About Content */}
                <section className="py-20 px-4 bg-gray-50/50">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-[#0091FF]/20 rounded-[3rem] blur-2xl group-hover:bg-[#0091FF]/30 transition-all duration-700"></div>
                                <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
                                    <div className="aspect-[4/5] bg-gray-100 rounded-[2rem] flex items-center justify-center">
                                        <Camera className="w-20 h-20 text-[#0091FF]/20" />
                                    </div>
                                    <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-[#0091FF] text-white rounded-xl">
                                                <Heart className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#004273] text-lg">Vitor Daltro</h4>
                                                <p className="text-gray-500 text-sm">Visual Storyteller</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <h2 className="text-4xl font-bold text-[#004273] leading-tight">Um olhar diferenciado para momentos únicos.</h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Minha jornada na fotografia começou com uma câmera analógica e uma curiosidade infinita pelo mundo ao meu redor. Hoje, utilizo a tecnologia mais moderna para elevar cada ensaio ao nível de arte editorial.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <span className="text-4xl font-bold text-[#0091FF]">5+</span>
                                        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Anos de Experiência</p>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-4xl font-bold text-[#0091FF]">200+</span>
                                        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Projetos Entregues</p>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-4xl font-bold text-[#0091FF]">15+</span>
                                        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Prêmios Nacionais</p>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-4xl font-bold text-[#0091FF]">100%</span>
                                        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Clientes Satisfeitos</p>
                                    </div>
                                </div>

                                <Link href="/contato" className="inline-flex items-center gap-4 px-10 py-5 bg-[#0091FF] text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-[#0091FF]/20 group">
                                    Começar um Projeto <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills & Timeline */}
                <section className="py-32 px-4">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            {/* Skills */}
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-3xl font-bold text-[#004273] mb-4">Minhas Habilidades</h3>
                                    <p className="text-gray-500">Desenvolvimento constante para entregar o melhor resultado visual.</p>
                                </div>

                                <div className="space-y-8">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="space-y-3">
                                            <div className="flex justify-between items-center px-1">
                                                <div className="flex items-center gap-3 font-bold text-[#004273] uppercase tracking-widest text-sm">
                                                    {skill.icon} {skill.name}
                                                </div>
                                                <span className="text-[#0091FF] font-bold">{skill.level}%</span>
                                            </div>
                                            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-[#0091FF] shadow-[0_0_10px_rgba(0,145,255,0.4)]"
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Experience */}
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-3xl font-bold text-[#004273] mb-4 flex items-center gap-3">
                                        <Briefcase className="text-[#0091FF]" /> Trajetória
                                    </h3>
                                    <p className="text-gray-500">Uma evolução pautada na qualidade e no profissionalismo.</p>
                                </div>

                                <div className="relative space-y-12">
                                    <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200 border-dashed"></div>
                                    {timeline.map((item, index) => (
                                        <div key={index} className="relative pl-12 group">
                                            <div className="absolute left-0 top-1.5 w-6 h-6 bg-white border-4 border-[#0091FF] rounded-full z-10 group-hover:scale-125 transition-transform duration-300"></div>
                                            <span className="text-xs font-bold text-[#0091FF] uppercase tracking-widest mb-2 block">{item.year}</span>
                                            <h4 className="text-xl font-bold text-[#004273] mb-1">{item.title}</h4>
                                            <p className="text-[#0091FF] text-sm font-bold mb-3">{item.company}</p>
                                            <p className="text-gray-600 leading-relaxed text-sm max-w-lg">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                <footer className="w-full bg-black/40 backdrop-blur-md text-white/60 border-t border-white/5">
                    <div className="container mx-auto px-4 py-10">
                        <p className="text-[10px] md:text-sm text-center uppercase tracking-widest">
                            © {new Date().getFullYear()} Vitor Daltro. Todos os direitos reservados.
                        </p>
                    </div>
                </footer>
            </main>
        </div>
    );
}
