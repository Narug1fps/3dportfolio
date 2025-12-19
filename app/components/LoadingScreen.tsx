
"use client"

import { useProgress } from "@react-three/drei"
import { useEffect, useState } from "react"
import { devilBreeze } from "../fonts"

export default function LoadingScreen() {
    const { active, progress } = useProgress()
    const [finished, setFinished] = useState(false)

    useEffect(() => {
        // If not active, we are done. Handle cases where progress is 0 (nothing to load) or 100 (finished)
        if (!active) {
            // Add a small delay to ensure smoother transition
            const timer = setTimeout(() => {
                setFinished(true)
            }, 500)
            return () => clearTimeout(timer)
        }
        if (active) {
            setFinished(false)
        }
    }, [active, progress])

    if (finished) return null

    return (
        <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${!active ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className={`${devilBreeze.className} text-[#0091FF] text-4xl mb-4`}>
                Loading...
            </div>
            <div className="w-64 h-2 bg-[#004273] rounded-full overflow-hidden">
                <div
                    className="h-full bg-[#0091FF] transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="text-[#0091FF] mt-2 font-mono text-sm">
                {Math.round(progress)}%
            </div>
        </div>
    )
}
