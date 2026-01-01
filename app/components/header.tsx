"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname()
  const isHome = pathname === "/"

  // Detecta scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Header styles
  const headerStyles = scrolled
    ? "bg-white/70 backdrop-blur-md border-b border-black/10 shadow-sm"
    : "bg-white border-b border-transparent"

  const textStyles =
    "text-[#666666] hover:text-[#1a1a1a] transition-all duration-300"

  const logoStyles = "text-[#666666]"

  return (
    <header
      id="nav"
      className={`${headerStyles} fixed top-0 left-0 right-0 z-[100] transition-all duration-300`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`${logoStyles} text-xl md:text-2xl font-bold hover:text-[#1a1a1a] tracking-tighter`}
          >
            ERICA<span className="text-[#1a1a1a]">FABIAN</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {["Início", "Sobre", "Portfólio", "Contato"].map((item, i) => {
              const href =
                item === "Início"
                  ? "/"
                  : `/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`

              return (
                <Link
                  key={i}
                  href={href}
                  className={`${textStyles} font-medium text-sm uppercase tracking-widest relative group`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a1a1a] transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            })}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${logoStyles}`} />
            ) : (
              <Menu className={`h-6 w-6 ${logoStyles}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 bg-white/90 backdrop-blur-xl border-t border-black/10 mt-2 rounded-b-3xl shadow-xl">
            <div className="flex flex-col items-center gap-6">
              {["Início", "Sobre", "Portfólio", "Contato"].map((item, i) => {
                const href =
                  item === "Início"
                    ? "/"
                    : `/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`

                return (
                  <Link
                    key={i}
                    href={href}
                    className={`${textStyles} font-bold text-lg tracking-widest uppercase`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
