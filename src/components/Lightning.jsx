import { useEffect, useState } from 'react'

export default function Lightning() {
  const [on, setOn] = useState(false)

  useEffect(() => {
    let t1
    let t2
    const schedule = () => {
      t1 = setTimeout(() => {
        setOn(true)
        t2 = setTimeout(() => {
          setOn(false)
          schedule()
        }, 160)
      }, 4000 + Math.random() * 6000)
    }
    schedule()
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return <div className={`lightning ${on ? 'on' : ''}`} aria-hidden="true" />
}
