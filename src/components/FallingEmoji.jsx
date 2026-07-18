import { useMemo } from 'react'

const EMOJI = ['🤘', '💀', '🔥', '🎸', '🍺', '⚡', '🥁']

export default function FallingEmoji() {
  const items = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        e: EMOJI[i % EMOJI.length],
        left: Math.random() * 100,
        dur: 7 + Math.random() * 9,
        delay: Math.random() * 12,
        size: 16 + Math.random() * 22,
      })),
    [],
  )

  return (
    <div className="falling" aria-hidden="true">
      {items.map((it) => (
        <span
          key={it.id}
          style={{
            left: `${it.left}%`,
            fontSize: `${it.size}px`,
            animationDuration: `${it.dur}s`,
            animationDelay: `${it.delay}s`,
          }}
        >
          {it.e}
        </span>
      ))}
    </div>
  )
}
