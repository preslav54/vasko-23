const LINE =
  'CASH • BEER • ROCK’N’ROLL • ВАСКО НА 23 • GUCCI • METALLICA • BALENCIAGA • ДО ДУПКА • LOUIS VUITTON • BURBERRY • '

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>{LINE}</span>
        <span>{LINE}</span>
      </div>
    </div>
  )
}
