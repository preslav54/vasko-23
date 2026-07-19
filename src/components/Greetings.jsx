import { useState } from 'react'

const GREETINGS = [
  {
    icon: '🥃',
    title: 'От сърце и черен дроб',
    text: 'Честит рожден ден, шибан рок бог! Дъртите остаряват – легендите стават по-богати. На 23 да пиеш като Lemmy, да свириш като Slash и портфейлът ти да е по-дебел от китарен усилвател!',
  },
  {
    icon: '💶',
    title: 'Кеш до тавана',
    text: 'Желая ти сметката винаги пълна, банкоматът да ти се усмихва, а банкерът да ти звъни само за да пита къде да прати още пари! Заплата като телефонен номер и бонуси като за Меси!',
  },
  {
    icon: '🕶️',
    title: 'Дрескод: лукс',
    text: 'Balenciaga на краката, Gucci на колана, Louis Vuitton за багажа и Burberry шал за зимата. Догодина да те снимаме как слизаш от частен джет, а не от рейса! 😎',
  },
  {
    icon: '🛥️',
    title: 'Яхти и джетове',
    text: 'Пожелавам ти лято на яхта в Монако, зима в Дубай и уикенди в Малдивите. Рокендролът си остава – ама вече от VIP ложата с бутилка от най-скъпото!',
  },
  {
    icon: '🎂',
    title: 'Златни свещички',
    text: 'Да духнеш свещичките на торта от пет етажа, а желанието ти да е шестцифрено – и да се сбъдне още преди Нова година! Часовникът Rolex, настроението – безценно!',
  },
  {
    icon: '📻',
    title: 'Плейлист за годината',
    text: 'Master of Puppets да ти е будилник, Highway to Hell – GPS-ът към купона, а Money на Pink Floyd – саундтракът на банковата ти сметка!',
  },
  {
    icon: '💀',
    title: 'Официално становище',
    text: 'На 23 вече си сертифициран разбивач на дансинги, каси и тъпанчета. Този сайт е юридическо доказателство, че си най-якото копеле на всеки фестивал!',
  },
  {
    icon: '🍺',
    title: 'Финален тост',
    text: 'Наздраве, брато! Обърни едно уиски от най-горния рафт, надуй Metallica до дупка и направи тая година толкова успешна, че догодина картичката да я гледаме от твоя пентхаус! 🤘',
  },
]

function Card({ g }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      type="button"
      className={`gcard ${open ? 'open' : ''}`}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="gcard-inner">
        <div className="gcard-front">
          <span className="gcard-icon">{g.icon}</span>
          <span className="gcard-title">{g.title}</span>
          <span className="gcard-hint">Натисни, ако смееш 😈</span>
        </div>
        <div className="gcard-back">
          <p>{g.text}</p>
        </div>
      </div>
    </button>
  )
}

export default function Greetings() {
  return (
    <section className="greetings">
      <h2 className="section-title fire-text">ЗЛАТНИ ПОЖЕЛАНИЯ 💸</h2>
      <p className="section-sub">Обърни картите. Всяка една е печеливша.</p>
      <div className="greetings-grid">
        {GREETINGS.map((g) => (
          <Card key={g.title} g={g} />
        ))}
      </div>
    </section>
  )
}
