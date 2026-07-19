import { useEffect, useState } from 'react'

export default function Hero() {
  const [age, setAge] = useState(0)

  useEffect(() => {
    let n = 0
    const id = setInterval(() => {
      n += 1
      setAge(n)
      if (n >= 23) clearInterval(id)
    }, 80)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="hero">
      <p className="hero-kicker">🤘 ЛЕГЕНДАТА ИМА РОЖДЕН ДЕН 🤘</p>
      <h1 className="hero-name glitch" data-text="ВАСИЛЕН ДЕКОВ">
        ВАСИЛЕН ДЕКОВ
      </h1>
      <p className="hero-sub">РОК ЗВЯРЪТ СТАВА НА</p>
      <div className="hero-age fire-text">{age}</div>
      <p className="hero-tag">Пий. Свири. Харчи на едро. Повтори. 🥃🎸💸</p>
      <div className="hero-horns" aria-hidden="true">
        <span className="horn">🤘</span>
        <span className="skull">💀</span>
        <span className="horn flip">🤘</span>
      </div>
    </header>
  )
}
