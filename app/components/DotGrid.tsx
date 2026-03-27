'use client'

import { useEffect, useRef } from 'react'

export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let scrollY = 0

    const resize = () => {
      canvas.width = window.innerWidth
      const body = document.body
      const html = document.documentElement
      canvas.height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.scrollHeight,
        html.offsetHeight
      )
      initDots()
    }

    const dots: { x: number; y: number; baseX: number; baseY: number }[] = []
    const spacing = 25
    const dotRadius = 2

    const initDots = () => {
      dots.length = 0
      for (let x = 15; x < canvas.width; x += spacing) {
        for (let y = 15; y < canvas.height; y += spacing) {
          dots.push({ x, y, baseX: x, baseY: y })
        }
      }
    }

    resize()
    window.addEventListener('resize', resize)
    setTimeout(resize, 1000) 

    let mouseX = -1000
    let mouseY = -1000

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY + scrollY
    }

    const handleScroll = () => {
      scrollY = window.scrollY
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach((dot) => {
        const dx = mouseX - dot.x
        const dy = mouseY - dot.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 65

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          dot.x -= Math.cos(angle) * force * 3
          dot.y -= Math.sin(angle) * force * 3
        } else {
          dot.x += (dot.baseX - dot.x) * 0.05
          dot.y += (dot.baseY - dot.y) * 0.05
        }

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 194, 0, 0.6)'
        ctx.fill()
        ctx.closePath()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        pointerEvents: 'none',
        zIndex: 10
      }}
    />
  )
}