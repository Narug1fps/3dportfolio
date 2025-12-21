"use client"
import Header from "../components/header";
import { devilBreeze } from "../fonts"
import { Mail, Phone, Instagram, Send, MapPin, Clock, MessageSquare, Globe, ArrowRight, Share2, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContatoPage() {
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
                <section className="pt-32 pb-16 px-4">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                            <span className="text-[#0091FF] font-bold tracking-widest uppercase text-sm mb-4 animate-fade-in">Vamos Começar</span>
                            <h1 className={`${devilBreeze.className} text-[#004273] text-6xl sm:text-8xl md:text-9xl font-bold leading-none mb-8`}>
                                ME <span className="text-[#0091FF]">CONTATE</span>
                            </h1>
                            <p className="text-gray-600 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                                Pronto para elevar sua marca or eternizar seus momentos? Preencha o formulário abaixo ou escolha um dos meus canais de comunicação.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="pb-32 px-4">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                            {/* Left Side: Contact Information */}
                            <div className="lg:col-span-5 space-y-8">
                                <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-12">
                                    <div className="space-y-6">
                                        <h3 className="text-3xl font-bold text-[#004273]">Informações Básicas</h3>
                                        <p className="text-gray-500">Responderei sua mensagem em até 24 horas úteis. Para urgências, prefira o telefone.</p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="flex items-center gap-6 group">
                                            <div className="p-4 bg-white text-[#0091FF] rounded-2xl shadow-md group-hover:bg-[#0091FF] group-hover:text-white transition-all duration-300">
                                                <Mail className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">E-mail</p>
                                                <p className="text-lg font-bold text-[#004273]">vitor@photo.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-6 group">
                                            <div className="p-4 bg-white text-[#0091FF] rounded-2xl shadow-md group-hover:bg-[#0091FF] group-hover:text-white transition-all duration-300">
                                                <Phone className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Telefone</p>
                                                <p className="text-lg font-bold text-[#004273]">(62) 99999-9999</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-6 group">
                                            <div className="p-4 bg-white text-[#0091FF] rounded-2xl shadow-md group-hover:bg-[#0091FF] group-hover:text-white transition-all duration-300">
                                                <MapPin className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Localização</p>
                                                <p className="text-lg font-bold text-[#004273]">Goiânia, GO - Brasil</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-gray-200">
                                        <h4 className="font-bold text-[#004273] mb-6 flex items-center gap-2">
                                            <Share2 className="w-5 h-5 text-[#0091FF]" /> Siga meu trabalho
                                        </h4>
                                        <div className="flex gap-4">
                                            <Link href="#" className="p-4 bg-white text-gray-400 hover:text-[#0091FF] rounded-xl shadow-sm hover:shadow-md transition-all">
                                                <Instagram className="w-6 h-6" />
                                            </Link>
                                            <Link href="#" className="p-4 bg-white text-gray-400 hover:text-[#0091FF] rounded-xl shadow-sm hover:shadow-md transition-all">
                                                <Linkedin className="w-6 h-6" />
                                            </Link>
                                            <Link href="#" className="p-4 bg-white text-gray-400 hover:text-[#0091FF] rounded-xl shadow-sm hover:shadow-md transition-all">
                                                <Globe className="w-6 h-6" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#0091FF] p-10 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full group-hover:scale-110 transition-transform duration-700"></div>
                                    <h4 className="text-2xl font-bold mb-4 relative z-10">Horários de Atendimento</h4>
                                    <div className="space-y-2 relative z-10 opacity-90 font-medium">
                                        <p className="flex justify-between items-center"><span>Segunda a Sexta</span> <span>09:00 — 18:00</span></p>
                                        <p className="flex justify-between items-center"><span>Sábado</span> <span>10:00 — 14:00</span></p>
                                        <p className="flex justify-between items-center text-white/50"><span>Domingo</span> <span>Fechado</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Contact Form */}
                            <div className="lg:col-span-7">
                                <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-gray-100 shadow-2xl relative overflow-hidden">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-50 rounded-full blur-3xl"></div>

                                    <div className="relative z-10 space-y-12">
                                        <div className="space-y-4">
                                            <h3 className="text-4xl font-bold text-[#004273]">Mande sua Proposta</h3>
                                            <p className="text-gray-500 text-lg">Detalhe sua ideia para que eu possa entregar o melhor orçamento.</p>
                                        </div>

                                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Seu Nome</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Vitor Daltro"
                                                        className="w-full px-8 py-5 bg-gray-50 border border-transparent focus:border-[#0091FF] focus:bg-white rounded-2xl outline-none transition-all duration-300 font-bold text-[#004273]"
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Seu E-mail</label>
                                                    <input
                                                        type="email"
                                                        placeholder="contato@exemplo.com"
                                                        className="w-full px-8 py-5 bg-gray-50 border border-transparent focus:border-[#0091FF] focus:bg-white rounded-2xl outline-none transition-all duration-300 font-bold text-[#004273]"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Tipo de Serviço</label>
                                                <div className="relative">
                                                    <select className="w-full px-8 py-5 bg-gray-50 border border-transparent focus:border-[#0091FF] focus:bg-white rounded-2xl outline-none transition-all duration-300 font-bold text-[#004273] appearance-none cursor-pointer">
                                                        <option>Ensaio Fotográfico Individual</option>
                                                        <option>Fotografia de Produto / E-commerce</option>
                                                        <option>Eventos Sociais Or Corporativos</option>
                                                        <option>Editorial de Moda</option>
                                                        <option>Outros Assuntos</option>
                                                    </select>
                                                    <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                        <ArrowRight className="w-5 h-5 rotate-90" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Mensagem Detalhada</label>
                                                <textarea
                                                    rows={6}
                                                    placeholder="Olá Vitor, gostaria de conversar sobre um ensaio..."
                                                    className="w-full px-8 py-6 bg-gray-50 border border-transparent focus:border-[#0091FF] focus:bg-white rounded-2xl outline-none transition-all duration-300 font-bold text-[#004273] resize-none"
                                                ></textarea>
                                            </div>

                                            <button className="w-full py-6 bg-black text-white font-black text-lg uppercase tracking-[0.2em] rounded-2xl hover:bg-[#0091FF] hover:shadow-2xl hover:shadow-[#0091FF]/30 transition-all duration-500 flex items-center justify-center gap-4 group">
                                                Enviar Mensagem <Send className="w-5 hidden md:block h-5  group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </form>
                                    </div>
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
