import { useCallback, useRef, useState } from 'react'
import Splash from './components/Splash.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Gallery from './components/Gallery.jsx'
import Greetings from './components/Greetings.jsx'
import AudioPlayer from './components/AudioPlayer.jsx'
import Embers from './components/Embers.jsx'
import FallingEmoji from './components/FallingEmoji.jsx'
import Lightning from './components/Lightning.jsx'

export default function App() {
  const audioRef = useRef(null)
  const [entered, setEntered] = useState(false)
  const [playing, setPlaying] = useState(false)

  const enter = useCallback(() => {
    setEntered(true)
    const a = audioRef.current
    if (a) {
      a.volume = 0.85
      a.play().catch(() => {})
    }
  }, [])

  const togglePlay = useCallback(() => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) a.play().catch(() => {})
    else a.pause()
  }, [])

  return (
    <>
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/master-of-puppets.mp3`}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {!entered ? (
        <Splash onEnter={enter} />
      ) : (
        <div className="site">
          <Embers />
          <FallingEmoji />
          <Lightning />
          <Hero />
          <Marquee />
          <Gallery />
          <Greetings />
          <footer className="footer">
            <p className="footer-big">ЧЕСТИТ РОЖДЕН ДЕН, ВАСКО! 🤘🔥</p>
            <p className="footer-small">
              Направено с 🍺, 💀 и много обич от твоя брат • 17.07.2026 • Rock till death
            </p>
          </footer>
          <AudioPlayer playing={playing} onToggle={togglePlay} />
        </div>
      )}
    </>
  )
}
