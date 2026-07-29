const appUrl = "http://iot.rectronx.com";
const repoUrl = "https://github.com/mahesh020795/sparkiot";

const capabilities = [
  { tag: "01 / VISUAL", title: "Dashboards that speak hardware", copy: "Compose gauges, charts, switches, maps, schedules, camera feeds and controls around the way your device actually works." },
  { tag: "02 / REUSE", title: "Template-first by design", copy: "Define datastreams, rules and layouts once. Reuse that blueprint across projects and provision the next board with confidence." },
  { tag: "03 / LIVE", title: "Realtime in both directions", copy: "Stream telemetry in and send commands back through MQTT, HTTP and WebSockets—with acknowledgements built into the flow." },
  { tag: "04 / HISTORY", title: "Know what happened", copy: "Filter historical telemetry by device or channel, inspect the trend, then export clean CSV data for deeper analysis." },
  { tag: "05 / ACTION", title: "React before you refresh", copy: "Create threshold alerts, browser notifications and repeatable schedules that keep projects moving when nobody is watching." },
  { tag: "06 / DEVICES", title: "Credentials you control", copy: "Provision devices with one-time tokens, rotate credentials when needed and keep every project cleanly separated." },
];

const plans = [
  { name: "Free", price: "RM0", note: "For learning and prototypes", features: ["1 project + 1 device", "40k messages / month", "7-day history"], cta: "Start free" },
  { name: "Plus", price: "RM25", note: "For complete personal projects", features: ["3 projects + 3 devices", "1M messages / month", "30-day history", "5 automations"], cta: "Choose Plus" },
  { name: "Pro", price: "RM49", note: "For developers and freelancers", features: ["10 projects + 10 devices", "10M messages / month", "90-day history", "20 automations"], cta: "Build on Pro", featured: true },
  { name: "Max", price: "RM99", note: "For commercial deployments", features: ["30 projects + 30 devices", "50M messages / month", "365-day history", "10 team members"], cta: "Scale with Max" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hesh IoT home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>HESH <b>IOT</b></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#platform">Platform</a>
          <a href="#developers">Developers</a>
          <a href="#pricing">Pricing</a>
          <a className="nav-github" href={repoUrl}>GitHub ↗</a>
        </nav>
        <a className="button button-small button-primary" href={appUrl}>Start free <span>↗</span></a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> Low-code IoT platform</p>
          <h1 aria-label="Build connected products without building the IoT backend.">Build connected products <em>without building the IoT backend.</em></h1>
          <p className="hero-lede">Connect hardware, shape live dashboards and automate the response—from your first ESP32 prototype to your next commercial deployment.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={appUrl}>Start building free <span>↗</span></a>
            <a className="button button-quiet" href={repoUrl}>View on GitHub <span>↗</span></a>
          </div>
          <div className="compatibility" aria-label="Supported technologies">
            <span>ESP32</span><span>ESP8266</span><span>MQTT</span><span>HTTP</span><span>WebSockets</span>
          </div>
        </div>

        <div className="product-frame" aria-label="Hesh IoT live dashboard preview">
          <div className="frame-bar">
            <div className="frame-brand"><span className="mini-mark" /> HESH IOT</div>
            <div className="frame-project">Smart irrigation <span>⌄</span></div>
            <div className="frame-online"><span /> LIVE</div>
          </div>
          <div className="frame-body">
            <aside className="frame-nav" aria-hidden="true">
              <b>H</b><span className="active">⌁</span><span>◇</span><span>≋</span><span>⌾</span><span>⚙</span>
            </aside>
            <div className="dashboard">
              <div className="dashboard-heading">
                <div><small>PROJECT / OVERVIEW</small><strong>Greenhouse 01</strong></div>
                <button type="button" tabIndex={-1}>+ Add widget</button>
              </div>
              <div className="metric-row">
                <article className="metric-card temperature"><small>AIR TEMP <span>V0</span></small><strong>29.4<sup>°C</sup></strong><div className="sparkline"><i /><i /><i /><i /><i /><i /><i /><i /></div><p><span>↑ 1.2%</span> vs last hour</p></article>
                <article className="metric-card moisture"><small>SOIL MOISTURE <span>V1</span></small><div className="gauge"><div><strong>68</strong><sup>%</sup></div></div><p><span className="status-dot" /> OPTIMAL RANGE</p></article>
                <article className="metric-card pump"><small>WATER PUMP <span>V3</span></small><div className="pump-state"><span>ON</span><i /></div><strong>00:12:42</strong><p>Running today</p></article>
              </div>
              <article className="chart-card">
                <div className="chart-head"><div><small>ENVIRONMENT</small><strong>Live telemetry</strong></div><div><span className="legend-one" /> Temperature <span className="legend-two" /> Humidity</div></div>
                <div className="chart-area"><div className="line line-one" /><div className="line line-two" /><span className="chart-label l1">30</span><span className="chart-label l2">20</span><span className="chart-label l3">10</span></div>
              </article>
            </div>
          </div>
          <div className="signal-chip"><span>⌁</span><div><small>DEVICE MESSAGE</small><b>V0 &nbsp; 29.4 °C</b></div><i>12ms</i></div>
        </div>
      </section>

      <section className="proof-bar" aria-label="Platform highlights">
        <p><span>01</span><strong>Open protocols</strong><small>MQTT + HTTP</small></p>
        <p><span>02</span><strong>Live by default</strong><small>WebSocket realtime</small></p>
        <p><span>03</span><strong>Hardware ready</strong><small>Arduino library</small></p>
        <p><span>04</span><strong>Built to grow</strong><small>Free to commercial</small></p>
      </section>

      <section className="workflow section-shell" id="platform">
        <div className="section-intro">
          <p className="eyebrow">One connected workflow</p>
          <h2>Connect. Compose. Control.</h2>
          <p>Go from blinking LED to a working connected product in a flow that stays understandable at every step.</p>
        </div>
        <div className="steps">
          <article><span className="step-number">01</span><div className="step-visual board-visual" aria-hidden="true"><i /><b>ESP</b><i /><i /><i /><i /></div><h3>Connect your board</h3><p>Create a device, copy its one-time token and bring ESP32, ESP8266 or another Arduino Client board online.</p><code>HeshIoT.begin(...)</code></article>
          <article><span className="step-number">02</span><div className="step-visual compose-visual" aria-hidden="true"><i /><i /><i /><i /><i /></div><h3>Compose the experience</h3><p>Turn virtual pins into a dashboard of gauges, charts, buttons, maps, schedules and smart controls.</p><code>V0 → Temperature</code></article>
          <article><span className="step-number">03</span><div className="step-visual flow-visual" aria-hidden="true"><i /><i /><i /><i /><b>IF</b><b>THEN</b></div><h3>Control what happens next</h3><p>Send realtime commands, retain history and trigger notifications or schedules without rebuilding the plumbing.</p><code>value &gt; 32 → alert</code></article>
        </div>
      </section>

      <section className="capabilities section-shell">
        <div className="section-intro split-intro">
          <div><p className="eyebrow">The platform</p><h2>Everything between your board and your breakthrough.</h2></div>
          <p>Production-shaped building blocks for people who would rather spend time on the product than another authentication flow, message broker or chart component.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => <article key={item.tag}><span>{item.tag}</span><h3>{item.title}</h3><p>{item.copy}</p><i aria-hidden="true">↗</i></article>)}
        </div>
      </section>

      <section className="developer-section" id="developers">
        <div className="section-shell developer-grid">
          <div className="developer-copy">
            <p className="eyebrow">Made for real hardware</p>
            <h2>Your board already knows the language.</h2>
            <p>The installable Arduino library keeps the happy path compact without hiding the protocols underneath. Use the helper API, connect through any compatible Client, or integrate directly with MQTT and HTTP.</p>
            <ul><li><span>✓</span> ESP32 + ESP8266 examples</li><li><span>✓</span> Ethernet, WiFiNINA and client adapters</li><li><span>✓</span> Two-way virtual pin commands</li><li><span>✓</span> Delivery acknowledgement and status</li></ul>
            <a className="text-link" href={repoUrl}>Explore the repository <span>↗</span></a>
          </div>
          <div className="code-window">
            <div className="code-bar"><span><i /><i /><i /></span><b>greenhouse.ino</b><small>ARDUINO</small></div>
            <pre><code><span className="muted">#include</span> <span className="green">&lt;SparkIoT.h&gt;</span>{`\n\n`}<span className="blue">void</span> setup() &#123;{`\n  `}<span className="gold">SparkIoT</span>.begin({`\n    `}WIFI_SSID, WIFI_PASSWORD,{`\n    `}BROKER_HOST, <span className="purple">1883</span>,{`\n    `}TENANT_ID, DEVICE_ID, TOKEN{`\n  `}&#41;;{`\n\n  `}<span className="gold">SparkIoT</span>.onCommand(<span className="green">&quot;V3&quot;</span>,{`\n    `}onPumpCommand{`\n  `}&#41;;{`\n`}&#125;{`\n\n`}<span className="blue">void</span> loop() &#123;{`\n  `}<span className="gold">SparkIoT</span>.loop();{`\n  `}SparkIoT.virtualWrite({`\n    `}<span className="green">&quot;V0&quot;</span>, <span className="purple">29.4</span>, <span className="green">&quot;C&quot;</span>{`\n  `}&#41;;{`\n`}&#125;</code></pre>
            <div className="code-status"><span><i /> device-greenhouse-01</span><b>CONNECTED · 18ms</b></div>
          </div>
        </div>
      </section>

      <section className="pricing section-shell" id="pricing">
        <div className="section-intro centered"><p className="eyebrow">Simple Malaysian pricing</p><h2>Start with one device. Scale when it matters.</h2><p>Every plan includes the core Hesh IoT experience. Upgrade for more devices, longer history and deeper automation.</p></div>
        <div className="pricing-grid">
          {plans.map((plan) => <article key={plan.name} className={plan.featured ? "featured-plan" : ""}>{plan.featured && <span className="popular">MOST POPULAR</span>}<div><h3>{plan.name}</h3><p>{plan.note}</p></div><p className="price"><strong>{plan.price}</strong><span>/ month</span></p><ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul><a className={`button ${plan.featured ? "button-primary" : "button-quiet"}`} href={appUrl}>{plan.cta} <span>↗</span></a></article>)}
        </div>
        <p className="enterprise-note"><span>Need white-labeling, custom limits or dedicated infrastructure?</span> <a href="mailto:hello@rectronx.com">Talk to us about Enterprise ↗</a></p>
      </section>

      <section className="faq section-shell">
        <div className="section-intro"><p className="eyebrow">Straight answers</p><h2>Frequently asked questions.</h2></div>
        <div className="faq-list">
          <details open><summary>What hardware can I connect?<span>+</span></summary><p>Hesh IoT includes ready examples for ESP32 and NodeMCU ESP8266. The Arduino Client adapter also opens the door to Ethernet, WiFiNINA, WiFiS3, MKR GSM/NB and similar network-capable boards.</p></details>
          <details><summary>Which protocols does Hesh IoT support?<span>+</span></summary><p>Devices can exchange telemetry and commands over MQTT or HTTP. The web experience uses realtime WebSocket updates for live dashboards and control.</p></details>
          <details><summary>Can I start for free?<span>+</span></summary><p>Yes. The Free plan includes one project, one device, 40,000 monthly messages and seven days of history—enough to learn, prototype and validate an idea.</p></details>
          <details><summary>Can I self-host Hesh IoT?<span>+</span></summary><p>The source repository includes Docker-based deployment foundations for evaluation and VPS hosting. Production use still requires your own security, backup, monitoring and operational setup.</p></details>
          <details><summary>Is there a native mobile app?<span>+</span></summary><p>Hesh IoT is currently web-first and works across modern desktop and mobile browsers. Native branded mobile applications are not part of the current release.</p></details>
        </div>
      </section>

      <section className="final-cta section-shell">
        <div><p className="eyebrow"><span className="live-dot" /> Your next device is waiting</p><h2>Built for the next thing you connect.</h2><p>Start free, bring a real board online and turn telemetry into something people can use.</p></div>
        <div><a className="button button-primary" href={appUrl}>Launch Hesh IoT <span>↗</span></a><small>No credit card required</small></div>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>HESH <b>IOT</b></span></a>
        <p>Connected products, without the backend detour.</p>
        <div><a href="#platform">Platform</a><a href="#developers">Developers</a><a href="#pricing">Pricing</a><a href={repoUrl}>GitHub ↗</a></div>
        <small>© 2026 Hesh IoT · A Rectronx product</small>
      </footer>
    </main>
  );
}
