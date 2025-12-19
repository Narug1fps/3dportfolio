"use client"
import Image from "next/image";
import { useEffect } from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



  return (
    <header id="nav" className="transparent top-0 left-0 right-0 z-50 fixed backdrop-blur-md ">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="/">
              VitorPhoto
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre Mim
            </a>
            <Link href="#portfolio" className="text-foreground hover:text-primary transition-colors font-medium">
              Portfólio
            </Link>
            <Link href="#contato">
              <div className="text-foreground hover:text-primary transition-colors font-medium">
                Contato
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#sobre"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre mim
              </a>
              <Link
                href="#portfolio"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfólio
              </Link>
              <Link href="#contato"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
