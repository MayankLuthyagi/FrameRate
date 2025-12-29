import Image from "next/image";

export default function Home() {
  return (
    <div className="layout">
      {/* Background Ambience Layers */}
      <div className="stars"></div>
      <div className="nebula"></div>

      <main className="container">
        <header className="row header">
          <div className="logo">
            <Image preload src="/logo.png" alt="FrameRate Logo" width={32} height={32} />
            <span>FrameRate</span>
          </div>
          <nav className="nav">
            <a href="#sign">Sign Up</a>
          </nav>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <div className="badge">Beta 1.0</div>

            <h1 className="title">
              From Script to <br />
              <span className="text-gradient">Cinema. Instantly.</span>
            </h1>

            <p className="lead">
              FrameRate is an AI-powered video engine that converts scripts into
              structured, cinematic video sequences complete with scenes,
              motion, and sound.
            </p>

            <div className="cta-group">
              <a className="btn btn-primary" href="#start">
                Generate Your First Video
              </a>
            </div>

            <div className="stats-row">
              <div>
                <strong>1m</strong>
                <span className="subtle">Avg. preview render</span>
              </div>
              <div>
                <strong>4K</strong>
                <span className="subtle">Export resolution</span>
              </div>
              <div>
                <strong>∞</strong>
                <span className="subtle">Scene permutations</span>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual card glass" id="demo">
            <div className="window-header">
              <div className="dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="window-title">generate_scene.mp4</div>
            </div>

            <div className="preview-area">
              <div className="play-overlay">
                <div className="play-icon">▶</div>
              </div>

              <div className="timeline-container">
                <div className="scrubber"></div>
                <div className="track">
                  <div className="clip c1">Scene 1</div>
                  <div className="clip c2">Scene 2</div>
                  <div className="clip c3">Scene 3</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="col">
            <div className="logo-sm">FrameRate</div>
            <p className="subtle">
              A generative video system for story-first motion.
            </p>
            <p className="subtle" style={{ fontSize: 12 }}>
              Currently in beta. Features and performance may evolve.
            </p>
          </div>

        </footer>
      </main>
    </div>
  );
}
