import { useState } from 'react'

const GREETINGS = [
  {
    icon: '🥃',
    title: 'От сърце и черен дроб',
    text: 'Честит рожден ден, шибан рок бог! Дъртите остаряват – легендите стават по-зли. На 23 да пиеш като Lemmy, да свириш като Slash и мацките да ти се лепят като групита на Mötley Crüe!',
  },
  {
    icon: '🛏️',
    title: 'Пожелание за спалнята',
    text: 'Желая ти китарата винаги настроена, бирата винаги ледена и леглото никога празно! Тая година чаршафите ти да видят повече екшън от мош пит на концерт на Metallica!',
  },
  {
    icon: '🐾',
    title: 'За дивите котки',
    text: 'Мадамите да ти дерат гърба като диви котки на първия ред! А, чакай… то вече се случва – имаме снимка за доказателство, мръснико! 😏',
  },
  {
    icon: '🎸',
    title: 'Sex, Drugs & Rock’n’Roll',
    text: 'Пожелавам ти секс, drugs и рокендрол… ама без drugs, че мама ще се сърди. Значи – двойна доза от първото и третото. Ти се оправяй с графика!',
  },
  {
    icon: '🎂',
    title: 'Мръсни мисли',
    text: 'Да духа вятърът в косата ти на макс, а мацките да духат… свещичките на тортата ти, естествено! Ти какво си помисли, безсрамнико?!',
  },
  {
    icon: '📻',
    title: 'Плейлист за годината',
    text: 'Master of Puppets да ти е будилник, Highway to Hell – GPS-ът към купона, а Pour Some Sugar On Me – официална инструкция за уикендите!',
  },
  {
    icon: '💀',
    title: 'Официално становище',
    text: 'На 23 вече си сертифициран разбивач на легла, сърца и тъпанчета. Този сайт е юридическо доказателство, че си най-якото копеле на всеки фестивал!',
  },
  {
    icon: '🍺',
    title: 'Финален тост',
    text: 'Наздраве, брато! Обърни едно уиски, надуй Metallica до дупка и направи тая година толкова дива, че догодина да имаме двойно повече компромати за картичката! 🤘',
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
      <h2 className="section-title fire-text">МРЪСНИ ПОЖЕЛАНИЯ 😈</h2>
      <p className="section-sub">Обърни картите. После ги изтрий от историята.</p>
      <div className="greetings-grid">
        {GREETINGS.map((g) => (
          <Card key={g.title} g={g} />
        ))}
      </div>
    </section>
  )
}
