export default function AudioPlayer({ playing, onToggle }) {
  return (
    <div className="player">
      <button
        type="button"
        className={`player-btn ${playing ? 'spin' : ''}`}
        onClick={onToggle}
        aria-label={playing ? 'Пауза' : 'Пусни'}
        title={playing ? 'Пауза' : 'Пусни'}
      >
        <span className="player-icon">
          {playing ? (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <rect x="5" y="4" width="5" height="16" rx="1.5" />
              <rect x="14" y="4" width="5" height="16" rx="1.5" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M7 4.8v14.4c0 1 1.1 1.6 2 1.1l11.2-7.2c.8-.5.8-1.7 0-2.2L9 3.7c-.9-.5-2 .1-2 1.1z" />
            </svg>
          )}
        </span>
      </button>
      <div className="player-info">
        <span className="player-track">Metallica – Master of Puppets</span>
        <div className={`eq ${playing ? '' : 'paused'}`} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}
