"use client"
import Header from "./components/header";
import { devilBreeze } from "./fonts"
import Sobre from "./components/sobre";
import Portfolio from "./components/portfolio";
import Contato from "./components/contato";
import ScrollAnimatedModel from "./components/ScrollAnimatedModel";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";

import { Suspense, useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const pagesValue = isMobile ? 4.5 : 4.14;

  return (
    <>
      <LoadingScreen />

      {/* 3D Background - Fixed */}
      <div id="canvas-container" className="fixed inset-0 z-0" style={{
        backgroundImage: 'url(/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Suspense fallback={null}>
            <ScrollControls key={isMobile ? "mobile" : "desktop"} pages={pagesValue} damping={0.5}>
              {/* 3D content that animates with scroll */}
              <ambientLight intensity={2.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <ScrollAnimatedModel />

              {/* HTML content inside ScrollControls */}
              <Scroll html>
                <div className="w-screen">
                  {/* Hero Section */}
                  <div className="min-h-[50vh] md:h-screen flex flex-col items-center justify-start pt-10 md:pt-20 pointer-events-auto">

                    <div className={`${devilBreeze.className} mt-5 text-[#0091FF] text-[4em]  sm:text-[7em] md:text-[11em] font-[bold] relative text-center before:content-[attr(data-before)] before:absolute before:z-[-1] before:text-[#004273] before:top-[0.5em] before:inset-[0.66em_0_0_0]`}
                      data-before="GRAFic">PHOTO</div>
                  </div>

                  {/* Sobre Section */}
                  <div className="min-h-[50vh] mt-14 md:h-screen pointer-events-auto">
                    <Sobre />
                  </div>

                  {/* Portfolio Section */}
                  <div className="min-h-full pointer-events-auto">
                    <Portfolio />
                  </div>

                  {/* Contato Section */}
                  <div className=" pointer-events-auto">
                    <Contato />
                  </div>
                </div>

                <footer className="w-full bg-black/40 backdrop-blur-md mt-75 md:mt-28 text-white/60 border-t border-white/5">
                  <div className="container mx-auto px-4 py-10">
                    <p className="text-[10px] md:text-sm text-center uppercase tracking-widest">
                      © {new Date().getFullYear()} Vitor Daltro. Todos os direitos reservados.
                    </p>
                  </div>
                </footer>

              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}