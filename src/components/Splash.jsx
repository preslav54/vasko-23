export default function Splash({ onEnter }) {
  return (
    <div
      className="splash"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/hero.jpg)` }}
    >
      <div className="splash-overlay" />
      <div className="splash-content">
        <p className="splash-kicker">⚡ ВНИМАНИЕ: ЕКСТРЕМНО СЪДЪРЖАНИЕ ⚡</p>
        <h1 className="splash-title glitch" data-text="ВАСКО НА 23">
          ВАСКО&nbsp;НА&nbsp;23
        </h1>
        <p className="splash-sub">Честит шибан рожден ден, братле! 🤘</p>
        <button className="splash-btn" onClick={onEnter}>
          ВЛИЗАЙ И НАДУЙ ЗВУКА 🔊
        </button>
        <p className="splash-warn">
          Съдържа: вулгарен хумор, тежък метъл, лукс и неприлично количество кеш.
          <br />
          Вход само за легенди.
        </p>
      </div>
    </div>
  )
}
