import React, { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

interface Star {
  x: number
  y: number
  z: number
  size: number
  baseAlpha: number
  alpha: number
  blinkSpeed: number
  color: string
}

export const StarfieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const { isLight } = useTheme()
  const isLightRef = useRef(isLight)

  useEffect(() => {
    isLightRef.current = isLight
  }, [isLight])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const numStars = window.innerWidth < 768 ? 120 : 260
    const stars: Star[] = []

    const darkStarColors = [
      '#ffffff',
      '#ffffff',
      '#f0f9ff',
      '#e0f2fe',
      '#38bdf8', // electric blue
      '#93c5fd',
    ]

    for (let i = 0; i < numStars; i++) {
      const z = Math.random() * 1000 + 1
      const isBlue = Math.random() > 0.85
      stars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z,
        size: Math.random() * 1.5 + 0.6,
        baseAlpha: Math.random() * 0.7 + 0.3,
        alpha: Math.random(),
        blinkSpeed: Math.random() * 0.02 + 0.005,
        color: isBlue ? '#38bdf8' : darkStarColors[Math.floor(Math.random() * darkStarColors.length)],
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.05
      targetMouseY = (e.clientY - height / 2) * 0.05
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('resize', handleResize)

    let time = 0

    const render = () => {
      time += 0.01
      // Smooth lerp mouse
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      const lightMode = isLightRef.current

      if (lightMode) {
        // Solar Flare / Sunrise Orbit Canvas
        ctx.fillStyle = '#fdfbf7'
        ctx.fillRect(0, 0, width, height)

        // Draw Solar Flare radial glow in top right
        const gradient = ctx.createRadialGradient(
          width * 0.8 + mouseX * 0.3,
          height * 0.2 + mouseY * 0.3,
          60,
          width * 0.8,
          height * 0.2,
          width * 0.65
        )
        gradient.addColorStop(0, 'rgba(251, 191, 36, 0.16)')
        gradient.addColorStop(0.4, 'rgba(249, 115, 22, 0.07)')
        gradient.addColorStop(1, 'rgba(253, 251, 247, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      } else {
        // Deep Space Cosmos Canvas
        ctx.fillStyle = '#020617'
        ctx.fillRect(0, 0, width, height)

        // Draw faint radial space glow in top right & center
        const gradient = ctx.createRadialGradient(
          width * 0.75 + mouseX * 0.3,
          height * 0.25 + mouseY * 0.3,
          50,
          width * 0.75,
          height * 0.25,
          width * 0.6
        )
        gradient.addColorStop(0, 'rgba(14, 116, 144, 0.09)')
        gradient.addColorStop(0.5, 'rgba(30, 58, 138, 0.05)')
        gradient.addColorStop(1, 'rgba(2, 6, 23, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }

      // Draw celestial particles / stars
      const cx = width / 2
      const cy = height / 2

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        if (!prefersReducedMotion) {
          star.alpha += star.blinkSpeed
          // Slow forward drift
          star.z -= 0.2
          if (star.z <= 0) {
            star.z = 1000
            star.x = (Math.random() - 0.5) * width * 2
            star.y = (Math.random() - 0.5) * height * 2
          }
        }

        const k = 600 / star.z
        const px = (star.x + mouseX * (1000 - star.z) * 0.001) * k + cx
        const py = (star.y + mouseY * (1000 - star.z) * 0.001) * k + cy

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = star.size * k * 0.8
          const currentAlpha = Math.abs(Math.sin(star.alpha)) * star.baseAlpha

          ctx.beginPath()
          ctx.arc(px, py, Math.max(0.4, size), 0, Math.PI * 2)

          if (lightMode) {
            ctx.fillStyle = star.color === '#38bdf8' ? '#d97706' : '#d17a22'
            ctx.globalAlpha = Math.min(0.65, Math.max(0.15, currentAlpha * 0.7))
          } else {
            ctx.fillStyle = star.color
            ctx.globalAlpha = Math.min(1, Math.max(0.1, currentAlpha))
          }
          ctx.fill()

          // Subtle glow for larger particles
          if (size > 1.2) {
            ctx.beginPath()
            ctx.arc(px, py, size * 2.2, 0, Math.PI * 2)
            ctx.fillStyle = lightMode ? 'rgba(245, 158, 11, 0.15)' : 'rgba(56, 189, 248, 0.15)'
            ctx.fill()
          }
        }
      }

      ctx.globalAlpha = 1
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
