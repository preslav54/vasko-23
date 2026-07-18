const LINE =
  'SEX • BEER • ROCK’N’ROLL • ВАСКО НА 23 • МАЦКИ • METALLICA • ОЩЕ БИРА • ДО ДУПКА • ДИВИ КОТКИ • '

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
