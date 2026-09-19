import './love.css'

function Love() {
  return (
    <div className="love-page">
      <div className="love-card">
        <div className="heart-wrap" aria-label="heart illustration">
          <span className="heart">❤</span>
        </div>

        <p className="tagline">For the one I love most</p>
        <h1>Hey love,</h1>

        <p className="message">
          Every day with you feels like a beautiful little miracle.<br />
          Thank you for being my calm, my joy, and my favorite person.
        </p>

        <button type="button" className="love-button">
          I love you ❤️
        </button>
      </div>
    </div>
  )
}

export default Love
