"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'




  // Dynamic Styles based on theme
  const headerStyles = isHome
    ? "bg-black/20 backdrop-blur-md border-b border-white/10"
    : "bg-white backdrop-blur-md border-b border-border/50"

  const textStyles = isHome
    ? "text-white/80 hover:text-[#0091FF]"
    : "text-black hover:text-[#0091FF]"

  const logoStyles = isHome
    ? "text-white"
    : "text-foreground"

  return (
    <header id="nav" className={`${headerStyles} top-0 left-0 right-0 z-[100] fixed
    transition-all duration-300`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className={`${logoStyles} text-xl md:text-2xl font-bold  hover:text-[#0091FF] transition-all duration-300 tracking-tighter`}>
              VITOR<span className="text-[#0091FF]">PHOTO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className={`${textStyles} transition-all duration-300 font-medium text-sm uppercase tracking-widest relative group`}>
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0091FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/sobre" className={`${textStyles} transition-all duration-300 font-medium text-sm uppercase tracking-widest relative group`}>
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0091FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/galeria" className={`${textStyles} transition-all duration-300 font-medium text-sm uppercase tracking-widest relative group`}>
              Portfólio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0091FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contato" className={`${textStyles} transition-all duration-300 font-medium text-sm uppercase tracking-widest relative group`}>
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0091FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className={`h-6 w-6 ${logoStyles}`} /> : <Menu className={`h-6 w-6 ${logoStyles}`} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-6 ${isHome ? 'bg-black/90' : 'bg-background/95'} backdrop-blur-xl border-t border-border mt-2 rounded-b-3xl shadow-xl`}>
            <div className="flex flex-col items-center gap-6">
              <Link href="/" className={`${textStyles} font-bold text-lg tracking-widest uppercase transition-all duration-300`}>
                Início
              </Link>
              <Link href="/sobre" className={`${textStyles} font-bold text-lg tracking-widest uppercase transition-all duration-300`}>
                Sobre
              </Link>
              <Link href="/galeria" className={`${textStyles} font-bold text-lg tracking-widest uppercase transition-all duration-300`}>
                Portfólio
              </Link>
              <Link href="/contato" className={`${textStyles} font-bold text-lg tracking-widest uppercase transition-all duration-300`}>
                Contato
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
