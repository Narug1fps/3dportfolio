
"use client"

import { useProgress } from "@react-three/drei"
import { useEffect, useState } from "react"
import { devilBreeze } from "../fonts"

export default function LoadingScreen() {
    const { active, progress } = useProgress()
    const [hidden, setHidden] = useState(false)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        // When loading is finished (active is false and progress is 100)
        if (!active && progress === 100) {
            // Wait a small moment to ensure the 3D scene has one frame to render
            const timer = setTimeout(() => {
                setHidden(true)
                // After the fade-out duration (500ms), unmount the component
                const unmountTimer = setTimeout(() => {
                    setVisible(false)
                }, 500)
                return () => clearTimeout(unmountTimer)
            }, 1000) // Increase delay to 1s to be safe and show 100%
            return () => clearTimeout(timer)
        }
    }, [active, progress])

    if (!visible) return null

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-all duration-700 ease-in-out ${hidden ? 'opacity-0 pointer-events-none scale-110' : 'opacity-100'
                }`}
        >
            <div className={`${devilBreeze.className} text-[#0091FF] text-4xl mb-4 tracking-wider animate-pulse`}>
                CARREGANDO...
            </div>
            <div className="w-64 h-1.5 bg-[#004273]/30 rounded-full overflow-hidden backdrop-blur-sm border border-[#0091FF]/20">
                <div
                    className="h-full bg-gradient-to-r from-[#004273] via-[#0091FF] to-[#004273] transition-all duration-500 ease-out shadow-[0_0_15px_rgba(0,145,255,0.5)]"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="text-[#0091FF] mt-4 font-mono text-sm tracking-widest opacity-80">
                {Math.round(progress)}%
            </div>
        </div>
    )
}
