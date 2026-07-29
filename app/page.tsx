const appUrl = "http://iot.rectronx.com";
const repoUrl = "https://github.com/mahesh020795/sparkiot";

const workflow = [
  { index: "01", name: "Template", label: "Shape the model", detail: "Choose a board, start from a real use case, and save the device structure once." },
  { index: "02", name: "Datastreams", label: "Name every signal", detail: "Define virtual pins, types, units, ranges, and the data your interface can trust." },
  { index: "03", name: "Device token", label: "Provision the board", detail: "Create the physical device, copy its one-time credential, and rotate it when needed." },
  { index: "04", name: "Arduino code", label: "Generate the sketch", detail: "Get board-specific code with MQTT settings, telemetry calls, and command handlers." },
  { index: "05", name: "Board Test", label: "Prove the loop", detail: "Watch the connection, inspect live readings, and send a command before composing the view." },
  { index: "06", name: "Live Dashboard", label: "Operate it live", detail: "Arrange widgets, control outputs, run schedules, and keep the history that matters." },
];

const proofGroups = [
  { label: "BUILD", title: "Model the product, not just the pin.", items: ["Reusable device templates", "Smart Irrigation, Smart Home and Energy Monitor starters", "Typed virtual-pin datastreams", "Arduino sketch generation"] },
  { label: "OPERATE", title: "Give every signal a useful surface.", items: ["Realtime gauges, values and controls", "Schedules and command acknowledgements", "GPS maps and camera URL views", "In-app and browser notifications"] },
  { label: "UNDERSTAND", title: "Keep context after the live moment.", items: ["Tank Level, Flood Level and Threshold Monitor", "Telemetry history and channel filters", "CSV export for analysis", "Power, event and device-status views"] },
];

const plans = [
  { name: "Free", price: "RM0", audience: "Learn and prove one idea.", facts: ["1 user · 1 project · 1 device", "40,000 messages / month", "7-day history", "No automation"] },
  { name: "Plus", price: "RM25", audience: "Finish a complete customer project.", facts: ["1 user · 3 projects · 3 devices", "1,000,000 messages / month", "30-day history", "5 automations"] },
  { name: "Pro", price: "RM49", audience: "Build for clients and growing businesses.", facts: ["1 user · 10 projects · 10 devices", "10,000,000 messages / month", "90-day history", "20 automations · API access"], featured: true },
  { name: "Max", price: "RM99", audience: "Operate a small commercial fleet.", facts: ["10 users · 30 projects · 30 devices", "50,000,000 messages / month", "365-day history", "100 automations"] },
  { name: "Enterprise", price: "Talk to us", audience: "Own the deployment shape.", facts: ["Custom limits and infrastructure", "White-label and custom domain", "Dedicated support", "Commercial deployment planning"] },
];

function Brand() {
  return <span className="brand"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><strong>HESH IOT</strong></span>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a href="#top" aria-label="Hesh IoT home"><Brand /></a>
        <nav aria-label="Main navigation">
          <a href="#product">Product</a><a href="#workflow">Workflow</a><a href="#proof">Proof</a><a href="#pricing">Pricing</a>
        </nav>
        <a className="button button-ink header-cta" href={appUrl}>Open Hesh IoT <span>↗</span></a>
      </header>

      <section className="hero" id="product">
        <div className="hero-copy">
          <p className="eyebrow"><span>●</span> The web-first device workspace</p>
          <h1>From board idea<br />to live dashboard.</h1>
          <p className="hero-lede">Model the device, define datastreams, generate Arduino code, prove the board loop, and operate it live—all in one guided workspace.</p>
          <div className="hero-actions">
            <a className="button button-coral" href={appUrl}>Build your first device <span>↗</span></a>
            <a className="button button-paper" href="#workflow">See the product flow <span>↓</span></a>
          </div>
          <div className="hero-facts"><span>ESP32 + ESP8266</span><span>MQTT + HTTP</span><span>Arduino library included</span></div>
        </div>

        <div className="product-window" aria-label="Hesh IoT Smart Irrigation product preview">
          <aside className="product-side">
            <Brand />
            <div className="side-nav"><b>▦ <span>Dashboard</span></b><i>⌁ <span>Templates</span></i><i>◫ <span>Devices</span></i><i>⌁ <span>Board Test</span></i></div>
            <small><em>●</em> ESP32 ONLINE</small>
          </aside>
          <div className="product-main">
            <div className="product-top"><div><small>SMART IRRIGATION</small><strong>Live workspace</strong></div><span>V0 · 18ms</span></div>
            <div className="builder-rail" aria-label="Product builder stages"><b>Template</b><i>→</i><b>Datastreams</b><i>→</i><b>Code</b><i>→</i><b>Test</b><i>→</i><b className="live-stage">Live</b></div>
            <div className="telemetry-grid">
              <article><div><small>TEMPERATURE</small><span>V0 / C</span></div><strong>29.4<em>°C</em></strong><div className="gauge gauge-blue"><i /></div><footer><span>LIVE VALUE</span><b>ONLINE</b></footer></article>
              <article><div><small>SOIL MOISTURE</small><span>V2 / %</span></div><strong>71<em>%</em></strong><div className="gauge gauge-green"><i /></div><footer><span>LIVE VALUE</span><b>HEALTHY</b></footer></article>
              <article className="tank-card"><div><small>TANK LEVEL</small><span>V11 / %</span></div><div className="tank"><i /><strong>72<em>%</em></strong></div><footer><span>720 / 1000 L</span><b>NORMAL</b></footer></article>
            </div>
            <div className="device-trace"><span>ESP32 Irrigation Node</span><i /><i /><i /><b>MQTT</b><i /><i /><i /><strong>Dashboard live</strong></div>
          </div>
          <span className="window-sticker sticker-ready">REAL PRODUCT FLOW</span>
          <span className="window-sticker sticker-pin">VIRTUAL PIN V0</span>
        </div>
      </section>

      <section className="ticker" aria-label="Product capabilities"><div>DEVICE TEMPLATES <i>✦</i> DATASTREAMS <i>✦</i> GENERATED ARDUINO CODE <i>✦</i> BOARD TEST <i>✦</i> LIVE DASHBOARDS <i>✦</i> HISTORY + CSV <i>✦</i></div></section>

      <section className="workflow section-shell" id="workflow">
        <div className="section-intro"><p className="section-label">01 / THE PRODUCT PATH</p><h2>Six steps.<br />No missing middle.</h2><p>The strongest part of Hesh IoT is not another dashboard. It is the guided path between a board in your hand and a control surface people can use.</p></div>
        <ol className="workflow-list">
          {workflow.map((step) => <li key={step.index}><span>{step.index}</span><div><small>{step.name}</small><h3>{step.label}</h3><p>{step.detail}</p></div><b>↘</b></li>)}
        </ol>
      </section>

      <section className="proof" id="proof">
        <div className="section-shell proof-head"><p className="section-label">02 / WHAT THE PRODUCT DOES</p><h2>Built around the work,<br />not the buzzwords.</h2><p>Every capability below is present in the inspected SparkIoT product foundation that powers Hesh IoT.</p></div>
        <div className="section-shell proof-grid">
          {proofGroups.map((group, index) => <article key={group.label} className={`proof-card proof-${index + 1}`}><span>{group.label}</span><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul><b>0{index + 1}</b></article>)}
        </div>
      </section>

      <section className="developer-bridge section-shell">
        <div className="bridge-copy"><p className="section-label">03 / YOUR BOARD, YOUR TRANSPORT</p><h2>A short library.<br />An open protocol.</h2><p>Use the included Arduino library for a fast start or publish to the documented MQTT and HTTP interfaces yourself. The convenience layer does not have to become a lock-in layer.</p><div className="bridge-tags"><span>ESP32</span><span>ESP8266</span><span>Arduino Client</span><span>MQTT</span><span>HTTP</span><span>WebSockets</span></div></div>
        <div className="code-window">
          <div className="code-top"><span>SmartIrrigation.ino</span><b>CONNECTED</b></div>
          <pre><code><em>01</em> #include &lt;SparkIoT.h&gt;{"\n"}<em>02</em>{"\n"}<em>03</em> SparkIoT.begin(...);{"\n"}<em>04</em> SparkIoT.virtualWrite(<b>&quot;V0&quot;</b>, 29.4, <b>&quot;C&quot;</b>);{"\n"}<em>05</em> SparkIoT.onCommand(<b>&quot;V3&quot;</b>, onPump);</code></pre>
          <div className="topic"><small>MQTT TOPIC</small><code>spark/v1/tenant/device/telemetry/V0</code></div>
        </div>
      </section>

      <section className="current-state" id="today">
        <div className="section-shell state-grid">
          <div className="state-copy"><p className="section-label">04 / CURRENT RELEASE</p><h2>Built now, not someday.</h2><p>The landing page should earn trust before it asks for a signup. These are the product surfaces already shaped in the repository.</p><a href={repoUrl}>Inspect the source on GitHub <span>↗</span></a></div>
          <div className="state-board">
            <div><span>MODEL</span><p>Templates, presets, virtual pins and dashboard layouts</p><b>READY</b></div>
            <div><span>CONNECT</span><p>ESP32, ESP8266 and Arduino Client-compatible boards</p><b>READY</b></div>
            <div><span>STREAM</span><p>MQTT and HTTP ingestion with realtime WebSocket updates</p><b>READY</b></div>
            <div><span>CONTROL</span><p>Commands, acknowledgements, schedules and notification rules</p><b>READY</b></div>
            <div><span>REVIEW</span><p>History, channel filters and CSV export</p><b>READY</b></div>
            <footer><strong>WEB-FIRST</strong><span>Native apps and managed production operations are not part of this release.</span></footer>
          </div>
        </div>
      </section>

      <section className="pricing section-shell" id="pricing">
        <div className="pricing-head"><p className="section-label">05 / PLANS WITH REAL LIMITS</p><h2>Start with one board.<br />Add room when it earns it.</h2><p>Plans follow the capacity model already defined for the product. Prices are monthly in Malaysian Ringgit.</p></div>
        <div className="plan-list">
          {plans.map((plan, index) => <article key={plan.name} className={plan.featured ? "featured-plan" : ""}><span>0{index + 1}</span><div><h3>{plan.name}</h3><p>{plan.audience}</p></div><strong>{plan.price}{plan.price.startsWith("RM") && <small>/mo</small>}</strong><ul>{plan.facts.map(fact => <li key={fact}>{fact}</li>)}</ul><a href={plan.name === "Enterprise" ? "mailto:hello@rectronx.com" : appUrl} aria-label={`Choose ${plan.name}`}>↗</a></article>)}
        </div>
      </section>

      <section className="faq section-shell"><div><p className="section-label">06 / STRAIGHT ANSWERS</p><h2>Before the<br />first upload.</h2></div><div className="faq-list">
        <details open><summary>Is this only for ESP32?<span>+</span></summary><p>No. The current library directly supports ESP32 and ESP8266, plus Arduino Client-compatible network boards. The Template Studio also exposes Raspberry Pi Pico and STM32 model choices.</p></details>
        <details><summary>Can I move a Blynk project over?<span>+</span></summary><p>The Template Studio includes a Blynk migration step and virtual-pin model. Treat migration as a guided rebuild and verify every datastream and command on real hardware.</p></details>
        <details><summary>Do I have to use the Arduino library?<span>+</span></summary><p>No. The MQTT topic model and HTTP telemetry interface are documented. The library is the fastest route for supported boards, not the only route.</p></details>
        <details><summary>Can I self-host it?<span>+</span></summary><p>The source includes Docker and VPS deployment foundations. TLS, backups, monitoring, updates, and production operations remain the operator&apos;s responsibility.</p></details>
      </div></section>

      <section className="final-cta"><div className="orbit orbit-a" aria-hidden="true" /><div className="orbit orbit-b" aria-hidden="true" /><p>BOARD → CLOUD → CONTROL</p><h2>Your board. One clear path to live.</h2><a className="button button-coral" href={appUrl}>Build your first device <span>↗</span></a></section>

      <footer className="site-footer section-shell"><a href="#top"><Brand /></a><p>From first datastream to daily operation.</p><div><a href="#workflow">Workflow</a><a href="#proof">Product</a><a href="#pricing">Pricing</a><a href={repoUrl}>GitHub ↗</a></div><small>© 2026 Hesh IoT · A Rectronx product</small></footer>
    </main>
  );
}
