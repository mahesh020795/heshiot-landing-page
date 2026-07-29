const appUrl = "http://iot.rectronx.com";
const repoUrl = "https://github.com/mahesh020795/sparkiot";

const recipes = [
  { number: "01", name: "Smart irrigation", signal: "31% soil", response: "Pump on", color: "recipe-blue", detail: "Moisture sensor → threshold → relay" },
  { number: "02", name: "Energy monitor", signal: "482 W", response: "Trend", color: "recipe-coral", detail: "Current clamp → history → CSV" },
  { number: "03", name: "GPS tracker", signal: "3.14, 101.7", response: "Map pin", color: "recipe-acid", detail: "Coordinates → virtual pin → map" },
  { number: "04", name: "Relay control", signal: "V3 = 1", response: "Light on", color: "recipe-ink", detail: "Dashboard switch → MQTT → ack" },
];

const capacities = [
  { name: "Try", price: "RM0", description: "One real idea, connected.", facts: ["1 project", "1 device", "40k messages", "7-day history"] },
  { name: "Build", price: "RM25", description: "Room to finish the project.", facts: ["3 projects", "3 devices", "1M messages", "5 automations"] },
  { name: "Ship", price: "RM49", description: "For work that leaves the bench.", facts: ["10 projects", "10 devices", "10M messages", "API access"] },
  { name: "Scale", price: "RM99", description: "A small fleet, one clear view.", facts: ["30 projects", "30 devices", "50M messages", "10 team members"] },
];

export default function Home() {
  return (
    <main id="top">
      <header className="play-header">
        <a className="play-brand" href="#top" aria-label="Hesh IoT home">
          <span className="play-logo" aria-hidden="true"><i /><i /><i /></span>
          <strong>HESH IOT</strong>
        </a>
        <nav aria-label="Main navigation">
          <a href="#flow">How it flows</a>
          <a href="#recipes">Project recipes</a>
          <a href="#today">Works today</a>
          <a href="#capacity">Pricing</a>
        </nav>
        <a className="pill-link dark-pill" href={appUrl}>Open the lab <span>↗</span></a>
      </header>

      <section className="play-hero">
        <div className="hero-sticker sticker-one" aria-hidden="true">MQTT READY</div>
        <div className="hero-sticker sticker-two" aria-hidden="true">12ms</div>
        <div className="hero-message">
          <p className="kicker"><span>●</span> A signal-first IoT toolkit</p>
          <h1>Your hardware has something to say.</h1>
          <p className="hero-promise">Hesh IoT turns device signals into dashboards, decisions, and actions.</p>
          <div className="hero-buttons">
            <a className="pill-link coral-pill" href={appUrl}>Send your first signal <span>↗</span></a>
            <a className="pill-link paper-pill" href="#flow">See how it flows <span>↓</span></a>
          </div>
          <p className="tiny-note">ESP32 · ESP8266 · MQTT · HTTP · WebSockets</p>
        </div>

        <div className="signal-machine" aria-label="A device signal moving from sensor to action">
          <div className="machine-grid" aria-hidden="true" />
          <div className="machine-label">LIVE SIGNAL / GREENHOUSE-01</div>
          <div className="sensor-node machine-node">
            <small>SENSOR</small><div className="sensor-chip"><i /><b>31</b><span>%</span></div><strong>SOIL</strong>
          </div>
          <div className="signal-track track-one" aria-hidden="true"><i /><i /><i /></div>
          <div className="logic-node machine-node"><small>RULE</small><div><span>IF</span><b>&lt; 35%</b></div><strong>CHECK</strong></div>
          <div className="signal-track track-two" aria-hidden="true"><i /><i /><i /></div>
          <div className="action-node machine-node"><small>ACTION</small><div className="toggle-on"><span>ON</span><i /></div><strong>PUMP</strong></div>
          <div className="machine-readout"><span>V1</span><b>31.0</b><small>delivered 20:14:03</small></div>
          <div className="machine-scribble" aria-hidden="true">signal in → outcome out</div>
        </div>
      </section>

      <section className="marquee" aria-label="Hesh IoT capabilities">
        <div><span>VIRTUAL PINS</span><i>✦</i><span>LIVE DASHBOARDS</span><i>✦</i><span>AUTOMATIONS</span><i>✦</i><span>HISTORY</span><i>✦</i><span>NOTIFICATIONS</span><i>✦</i><span>ARDUINO LIBRARY</span></div>
      </section>

      <section className="signal-story page-shell" id="flow">
        <div className="story-heading">
          <p className="section-number">01 / THE SIGNAL JOURNEY</p>
          <h2>One tiny value.<br />Four useful moments.</h2>
          <p>Hesh IoT keeps the whole journey visible—from the instant your sensor notices something to the moment your project responds.</p>
        </div>
        <ol className="journey-rail">
          <li><span className="journey-dot">1</span><small>READ</small><h3>Sense</h3><p>Your board reads the physical world: temperature, location, motion, moisture, power.</p><code>31.0 %</code></li>
          <li><span className="journey-dot">2</span><small>MOVE</small><h3>Transport</h3><p>MQTT or HTTP carries the value securely into the project and pushes it live over WebSockets.</p><code>V1 / telemetry</code></li>
          <li><span className="journey-dot">3</span><small>MAKE SENSE</small><h3>Understand</h3><p>Give the signal a gauge, chart, map, label, history trail, or a simple threshold rule.</p><code>soil &lt; 35</code></li>
          <li><span className="journey-dot">4</span><small>RESPOND</small><h3>Act</h3><p>Notify a person, run a schedule, switch a relay, or send a command back to the device.</p><code>pump = on</code></li>
        </ol>
      </section>

      <section className="recipes" id="recipes">
        <div className="page-shell recipe-heading">
          <div><p className="section-number">02 / START WITH AN OUTCOME</p><h2>Recipes for real things.</h2></div>
          <p>No vague “solutions.” These are the actual signal loops already shaped into the product.</p>
        </div>
        <div className="recipe-grid page-shell">
          {recipes.map((recipe) => (
            <article className={`recipe-card ${recipe.color}`} key={recipe.name}>
              <span className="recipe-number">{recipe.number}</span>
              <div className="recipe-loop"><div><small>IN</small><b>{recipe.signal}</b></div><i>→</i><div><small>OUT</small><b>{recipe.response}</b></div></div>
              <h3>{recipe.name}</h3><p>{recipe.detail}</p>
              <a href={appUrl} aria-label={`Build the ${recipe.name} recipe`}>Build this <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="works-today page-shell" id="today">
        <div className="today-title">
          <p className="section-number">03 / NO ROADMAP THEATRE</p>
          <h2>What works today.</h2>
          <p>A practical web-first tool you can put in front of a real board—not a slide about what might exist later.</p>
          <a className="under-link" href={repoUrl}>Inspect the source on GitHub <span>↗</span></a>
        </div>
        <div className="today-board">
          <div className="board-row"><span>CONNECT</span><p>ESP32, ESP8266 and Arduino Client-compatible boards</p><b>READY</b></div>
          <div className="board-row"><span>STREAM</span><p>MQTT and HTTP ingestion with realtime WebSocket updates</p><b>READY</b></div>
          <div className="board-row"><span>CONTROL</span><p>Two-way virtual pin commands with acknowledgements</p><b>READY</b></div>
          <div className="board-row"><span>COMPOSE</span><p>Templates, datastreams and configurable dashboard widgets</p><b>READY</b></div>
          <div className="board-row"><span>REMEMBER</span><p>Telemetry history, channel filters and CSV export</p><b>READY</b></div>
          <div className="board-row"><span>REACT</span><p>Schedules, alert rules, in-app and browser notifications</p><b>READY</b></div>
          <div className="board-note"><strong>WEB-FIRST</strong><span>Works on desktop and modern mobile browsers. Native apps are not part of this release.</span></div>
        </div>
      </section>

      <section className="connection-recipe">
        <div className="page-shell">
          <div className="connect-copy">
            <p className="section-number">04 / THE DEVELOPER PATH</p>
            <h2>Template to live dashboard.</h2>
            <p>Five visible moves. No backend scavenger hunt.</p>
          </div>
          <ol className="connection-steps">
            <li><span>1</span><div><small>SHAPE</small><strong>Create a template</strong><p>Name the board and define its virtual pins.</p></div></li>
            <li><span>2</span><div><small>PROVISION</small><strong>Add the device</strong><p>Copy the one-time credential into your sketch.</p></div></li>
            <li><span>3</span><div><small>SEND</small><strong>Write a value</strong><p><code>SparkIoT.virtualWrite(&quot;V0&quot;, 29.4, &quot;C&quot;);</code></p></div></li>
            <li><span>4</span><div><small>SEE</small><strong>Watch it arrive</strong><p>Test the board loop before you build the view.</p></div></li>
            <li><span>5</span><div><small>USE</small><strong>Compose the dashboard</strong><p>Turn the signal into a control people understand.</p></div></li>
          </ol>
          <a className="pill-link acid-pill" href={appUrl}>Open Hesh IoT <span>↗</span></a>
        </div>
      </section>

      <section className="capacity page-shell" id="capacity">
        <div className="capacity-heading"><p className="section-number">05 / PAY FOR CAPACITY</p><h2>Grow the project,<br />not the complexity.</h2><p>Start with a real free device. Add room only when the build needs it.</p></div>
        <div className="capacity-stack">
          {capacities.map((plan, index) => (
            <article key={plan.name}>
              <span className="capacity-index">0{index + 1}</span>
              <div><h3>{plan.name}</h3><p>{plan.description}</p></div>
              <strong>{plan.price}<small>/mo</small></strong>
              <ul>{plan.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
              <a href={appUrl} aria-label={`Choose the ${plan.name} capacity`}>↗</a>
            </article>
          ))}
        </div>
        <p className="enterprise-line">Need custom limits, white-labeling or dedicated infrastructure? <a href="mailto:hello@rectronx.com">Talk to Rectronx ↗</a></p>
      </section>

      <section className="play-faq page-shell">
        <div><p className="section-number">06 / QUICK ANSWERS</p><h2>Before you plug in.</h2></div>
        <div className="faq-items">
          <details open><summary>Is Hesh IoT a Blynk clone?<span>+</span></summary><p>No. It serves a similar need—connecting hardware to useful controls—but its current focus is a transparent, web-first workflow for makers, developers and small deployments.</p></details>
          <details><summary>Can I use my own MQTT client?<span>+</span></summary><p>Yes. The protocol is documented, and the included Arduino library is a convenience layer rather than a locked transport.</p></details>
          <details><summary>What happens on the Free capacity?<span>+</span></summary><p>You get one project, one device, 40,000 messages each month and seven days of history.</p></details>
          <details><summary>Can I run the source myself?<span>+</span></summary><p>The repository includes Docker and VPS deployment foundations. A production installation remains your responsibility for TLS, backups, monitoring and operations.</p></details>
        </div>
      </section>

      <section className="last-signal">
        <div className="last-orbit orbit-one" aria-hidden="true" /><div className="last-orbit orbit-two" aria-hidden="true" />
        <p>V0 · READY</p><h2>Your first signal<br />is one upload away.</h2>
        <a className="pill-link coral-pill" href={appUrl}>Send your first signal <span>↗</span></a>
      </section>

      <footer className="play-footer page-shell">
        <a className="play-brand" href="#top"><span className="play-logo" aria-hidden="true"><i /><i /><i /></span><strong>HESH IOT</strong></a>
        <p>Signals in. Outcomes out.</p>
        <div><a href="#flow">How it flows</a><a href="#today">Works today</a><a href="#capacity">Pricing</a><a href={repoUrl}>GitHub ↗</a></div>
        <small>© 2026 Hesh IoT · A Rectronx product</small>
      </footer>
    </main>
  );
}
