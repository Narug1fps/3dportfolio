"use client"

import { useGLTF, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react"
import * as THREE from "three"

const desktopWaypoints = [
    { scrollProgress: 0, position: new THREE.Vector3(0, -2.5, 0), rotation: new THREE.Euler(0, -9, 0) },
    { scrollProgress: 0.33, position: new THREE.Vector3(3, -0.7, 0), rotation: new THREE.Euler(0, -10.3, 0) },
    { scrollProgress: 0.66, position: new THREE.Vector3(-5, 0, 0), rotation: new THREE.Euler(-0, -8.4, 0) },
    { scrollProgress: 1, position: new THREE.Vector3(2, -1.7, 0), rotation: new THREE.Euler(0, -10.3, 0) },
]

const mobileWaypoints = [
    { scrollProgress: 0, position: new THREE.Vector3(0, -1, -4), rotation: new THREE.Euler(0, -9, 0) },
    { scrollProgress: 0.1, position: new THREE.Vector3(0, 0, -4), rotation: new THREE.Euler(0.5, -9, 0) },
    { scrollProgress: 0.4, position: new THREE.Vector3(0, 0, -4), rotation: new THREE.Euler(-0.4, -9, 0) },
    { scrollProgress: 0.6, position: new THREE.Vector3(0, 0, -4), rotation: new THREE.Euler(0, -9, 0) },
    { scrollProgress: 0.7, position: new THREE.Vector3(0, -2, -4), rotation: new THREE.Euler(0.4, -9, 0) },
    { scrollProgress: 1, position: new THREE.Vector3(0, -3, -4), rotation: new THREE.Euler(-0.4, -9, 0) },

]

export default function ScrollAnimatedModel() {
    const { scene } = useGLTF("/3d.glb")
    const groupRef = useRef<THREE.Group>(null)
    const scroll = useScroll()
    const { viewport } = useThree()
    const [isMobile, setIsMobile] = useState(false)

    // Detect mobile based on viewport width
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Interpolate between waypoints based on scroll progress
    useFrame(() => {
        if (!groupRef.current) return

        const scrollProgress = scroll.offset
        const waypoints = isMobile ? mobileWaypoints : desktopWaypoints

        // Clamp scroll progress to valid range
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress))

        // Find the two waypoints we're between
        let startWaypoint = waypoints[0]
        let endWaypoint = waypoints[waypoints.length - 1]

        for (let i = 0; i < waypoints.length - 1; i++) {
            if (clampedProgress >= waypoints[i].scrollProgress && clampedProgress <= waypoints[i + 1].scrollProgress) {
                startWaypoint = waypoints[i]
                endWaypoint = waypoints[i + 1]
                break
            }
        }

        // Calculate local progress between the two waypoints
        const range = endWaypoint.scrollProgress - startWaypoint.scrollProgress
        const localProgress = range > 0 ? (clampedProgress - startWaypoint.scrollProgress) / range : 0

        // Smoothly interpolate position
        const targetPosition = new THREE.Vector3().lerpVectors(
            startWaypoint.position,
            endWaypoint.position,
            localProgress
        )

        // Smoothly interpolate rotation using quaternions for smooth transitions
        const startQuat = new THREE.Quaternion().setFromEuler(startWaypoint.rotation)
        const endQuat = new THREE.Quaternion().setFromEuler(endWaypoint.rotation)
        const targetQuat = new THREE.Quaternion().slerpQuaternions(startQuat, endQuat, localProgress)

        // Apply with adaptive damping - higher lerp factor for faster catch-up
        const lerpFactor = 0.2
        groupRef.current.position.lerp(targetPosition, lerpFactor)
        groupRef.current.quaternion.slerp(targetQuat, lerpFactor)

        // Scale down on mobile
        const scale = isMobile ? 1 : 1
        groupRef.current.scale.setScalar(scale)
    })

    return (
        <group ref={groupRef} dispose={null}>
            <primitive
                object={scene}
                scale={[1.2, 1.2, 1.2]}
            />
        </group>
    )
}

useGLTF.preload("/3d.glb")