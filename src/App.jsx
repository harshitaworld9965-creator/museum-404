import './Museum.css'
import { useRef } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from  "gsap";

gsap.registerPlugin(useGSAP);

function App() {

  const roomRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.exhibit', {
      filter:'brightness(0)',
      duration:1.2,
      ease:'power1.inOut',
    })
    .from('.nail', {
      scale:0,
      duration:0.4,
      ease:'back.out(3)',
    }, '-=0.6')
    .fromTo(
      '.frame', {
        y:-160,
        autoAlpha:0,
        rotation:12,
      },
      {
        y:0,
        autoAlpha:1,
        rotation:12,
        duration:0.6,
        ease:'power2.in',
      }
    ).to('.frame', {rotation:-5, duration:2, ease:'elastic.out(1, 0.25'})
    .from('.placard', {y:30, autoAlpha:0, duration:0.7, ease:'power3.out'}, '-=1.6')
    .from('.lobby-link', {autoAlpha:0, duration:0.6}, '-=0.8')
  }, 
{scope: roomRef})

  return (
    <main className="room" ref={roomRef}>
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