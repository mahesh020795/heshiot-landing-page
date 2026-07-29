import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders Hesh IoT from the real product workflow", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Hesh IoT \| From board idea to live dashboard<\/title>/i);
  assert.match(html, /<meta(?=[^>]*property="og:image")(?=[^>]*content="http:\/\/localhost\/og\.png")[^>]*>/i);
  assert.match(html, /<meta(?=[^>]*name="twitter:image")(?=[^>]*content="http:\/\/localhost\/og\.png")[^>]*>/i);
  assert.match(html, /From board idea to live dashboard/i);
  assert.match(html, /model the device, define datastreams, generate Arduino code, prove the board loop, and operate it live/i);
  assert.match(html, /href="http:\/\/iot\.rectronx\.com"/i);
  assert.match(html, /href="https:\/\/github\.com\/mahesh020795\/sparkiot"/i);
  for (const stage of ["Template", "Datastreams", "Device token", "Arduino code", "Board Test", "Live Dashboard"]) {
    assert.match(html, new RegExp(stage, "i"));
  }
  for (const proof of ["Smart Irrigation", "Tank Level", "Flood Level", "Threshold Monitor", "CSV export", "MQTT", "HTTP"]) {
    assert.match(html, new RegExp(proof, "i"));
  }
  for (const plan of ["Free", "Plus", "Pro", "Max", "Enterprise", "RM0", "RM25", "RM49", "RM99"]) {
    assert.match(html, new RegExp(plan, "i"));
  }
  assert.match(html, /Built now, not someday/i);
  assert.match(html, /web-first/i);
  assert.match(html, /Your board\. One clear path to live/i);
  assert.doesNotMatch(html, /Your hardware has something to say/i);
  assert.doesNotMatch(html, /One tiny value\.\s*Four useful moments/i);
  assert.doesNotMatch(html, /Build connected products without building the IoT backend/i);
  assert.doesNotMatch(html, /Connect\. Compose\. Control\./i);
  assert.doesNotMatch(html, /Hesh IoT live dashboard preview/i);
  assert.doesNotMatch(html, /Everything between your board and your breakthrough/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});
