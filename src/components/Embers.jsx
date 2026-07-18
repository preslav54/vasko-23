import { useEffect, useRef } from 'react'

export default function Embers() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w = 0
    let h = 0
    let raf = 0

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spawn = (anywhere) => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : h + 10,
      r: 1 + Math.random() * 2.2,
      vy: 0.4 + Math.random() * 1.3,
      vx: (Math.random() - 0.5) * 0.6,
      a: 0.35 + Math.random() * 0.5,
      hue: 8 + Math.random() * 32,
    })

    const parts = Array.from({ length: 60 }, () => spawn(true))

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.shadowColor = 'rgba(255, 110, 0, 0.8)'
      ctx.shadowBlur = 6
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i]
        p.y -= p.vy
        p.x += p.vx + Math.sin(p.y / 42) * 0.3
        if (p.y < -12 || p.x < -20 || p.x > w + 20) parts[i] = spawn(false)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 100%, 55%, ${p.a})`
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas className="embers" ref={ref} aria-hidden="true" />
}
