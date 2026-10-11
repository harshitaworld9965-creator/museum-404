import './Museum.css'

function App() {
  return (
    <main className="room">
      {/* Soft light that will follow the cursor (step 5) */}
      <div className="spotlight" aria-hidden="true"></div>

      <section className="exhibit">
        {/* The nail the frame hangs from */}
        <div className="nail" aria-hidden="true"></div>

        {/* The frame: gold border > cream mat > empty canvas */}
        <div className="frame">
          <div className="mat">
            <div className="canvas"></div>
          </div>
        </div>

        {/* The museum label under the frame */}
        <div className="placard">
          <p className="placard-number">Exhibit 404</p>
          <h1 className="placard-title">The Missing Page</h1>
          <p className="placard-meta">Artist unknown</p>
          <p className="placard-meta">Medium: absence</p>
          <p className="placard-note">
            This work was here a moment ago. Curators are looking into it.
          </p>
        </div>
      </section>

      <a className="lobby-link" href="/">← Return to the lobby</a>
    </main>
  )
}

export default App