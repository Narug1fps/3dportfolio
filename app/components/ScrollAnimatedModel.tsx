"use client"

import { useGLTF, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react"
import * as THREE from "three"


const desktopWaypoints = [
    { scrollProgress: 0, position: new THREE.Vector3(0, -1.9, -1), rotation: new THREE.Euler(0, -0, 0) },
    { scrollProgress: 0.33, position: new THREE.Vector3(3, -0.7, -1), rotation: new THREE.Euler(0, -0.7, 0) },
    { scrollProgress: 0.66, position: new THREE.Vector3(-5, 0, -1), rotation: new THREE.Euler(-0, 1, 0) },
    { scrollProgress: 1, position: new THREE.Vector3(2, -1.3, -1), rotation: new THREE.Euler(0, -0.7, 0) },
]

const mobileWaypoints = [
    { scrollProgress: 0, position: new THREE.Vector3(0, -1, -4), rotation: new THREE.Euler(0, 0, 0) },
    { scrollProgress: 0.1, position: new THREE.Vector3(0, 0, -4), rotation: new THREE.Euler(0.5, 0, 0) },
    { scrollProgress: 0.4, position: new THREE.Vector3(0, 0, -4), rotation: new THREE.Euler(-0.4, 0, 0) },
    { scrollProgress: 0.6, position: new THREE.Vector3(0, 0, -4), rotation: new THREE.Euler(0, 0, 0) },
    { scrollProgress: 0.7, position: new THREE.Vector3(0, -2, -4), rotation: new THREE.Euler(0.4, 0, 0) },
    { scrollProgress: 1, position: new THREE.Vector3(0, -4.5, -4), rotation: new THREE.Euler(-0.4, 0, 0) },

]

export default function ScrollAnimatedModel() {
    const { scene } = useGLTF("/camera2.glb")
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

        // Find the two waypoints we're between
        let startWaypoint = waypoints[0]
        let endWaypoint = waypoints[1]

        for (let i = 0; i < waypoints.length - 1; i++) {
            if (scrollProgress >= waypoints[i].scrollProgress && scrollProgress <= waypoints[i + 1].scrollProgress) {
                startWaypoint = waypoints[i]
                endWaypoint = waypoints[i + 1]
                break
            }
        }

        // Calculate local progress between the two waypoints
        const range = endWaypoint.scrollProgress - startWaypoint.scrollProgress
        const localProgress = range > 0 ? (scrollProgress - startWaypoint.scrollProgress) / range : 0

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

        // Apply with damping for extra smoothness
        groupRef.current.position.lerp(targetPosition, 0.1)
        groupRef.current.quaternion.slerp(targetQuat, 0.1)

        // Scale down on mobile
        const scale = isMobile ? 1 : 1
        groupRef.current.scale.setScalar(scale)
    })

    return (
        <group ref={groupRef} dispose={null}>
            <primitive
                object={scene}
                scale={[10, 10, 10]}
            />
        </group>
    )
}

useGLTF.preload("/camera2.glb")
