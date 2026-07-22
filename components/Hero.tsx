export default function Hero() {
  return (
    <section className="hero">
      <div>
        <div className="badge">AFRO FASHION / አፍሮ ፋሽን</div>
        <h1>Premium style, made to move.</h1>
        <p>
          Discover curated fashion pieces, clean visuals, and a smooth shopping flow built for Telegram webapp users.
        </p>
        <div className="cta">
          <a className="btn primary" href="#catalog">Shop Now</a>
          <a className="btn ghost" href="#video">Watch Preview</a>
        </div>
        <div className="meta">
          <div className="stat"><b>2</b><small>Featured products</small></div>
          <div className="stat"><b>1300 ETB</b><small>Starting price</small></div>
          <div className="stat"><b>10.3K</b><small>Telegram subscribers</small></div>
        </div>
      </div>

      <div className="video-card" id="video">
        <video autoPlay muted loop playsInline poster="/poster.jpg">
          <source src="/promo.mp4" type="video/mp4" />
        </video>
        <div className="overlay">
          <h3>New drop is here</h3>
          <span>Order directly on Telegram</span>
        </div>
      </div>
    </section>
  );
      }
