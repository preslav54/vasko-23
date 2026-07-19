const PHOTOS = [
  {
    src: 'img/hero.jpg',
    cap: 'Легендата на живо, без филтри 🤘',
    tilt: -3,
  },
  {
    src: 'img/banner.jpg',
    cap: 'Две секунди преди да поръча цялото меню 😎',
    tilt: 2.5,
  },
  {
    src: 'img/concert.jpg',
    cap: 'Първи ред, нулев срам, максимален децибел 🔊',
    tilt: -2,
  },
  {
    src: 'img/festival.jpg',
    cap: 'Проверява дали е дошла заплатата… дошла е. 💶',
    tilt: 3,
  },
]

export default function Gallery() {
  return (
    <section className="gallery">
      <h2 className="section-title fire-text">ДОКАЗАТЕЛСТВЕН МАТЕРИАЛ 📸</h2>
      <p className="section-sub">Снимки от местопрестъплението. Съдът заседава.</p>
      <div className="gallery-grid">
        {PHOTOS.map((p) => (
          <figure
            key={p.src}
            className="photo-card"
            style={{ '--tilt': `${p.tilt}deg` }}
          >
            <img src={`${import.meta.env.BASE_URL}${p.src}`} alt={p.cap} />
            <figcaption>{p.cap}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
