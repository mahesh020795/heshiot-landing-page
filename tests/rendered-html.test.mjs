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

test("server-renders the distinctive Hesh IoT Signal Playground", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Hesh IoT \| Your hardware has something to say<\/title>/i);
  assert.match(html, /<meta(?=[^>]*property="og:image")(?=[^>]*content="http:\/\/localhost\/og\.png")[^>]*>/i);
  assert.match(html, /<meta(?=[^>]*name="twitter:image")(?=[^>]*content="http:\/\/localhost\/og\.png")[^>]*>/i);
  assert.match(html, /Your hardware has something to say/i);
  assert.match(html, /turns device signals into dashboards, decisions, and actions/i);
  assert.match(html, /href="http:\/\/iot\.rectronx\.com"/i);
  assert.match(html, /href="https:\/\/github\.com\/mahesh020795\/sparkiot"/i);
  assert.match(html, /Sense/);
  assert.match(html, /Transport/);
  assert.match(html, /Understand/);
  assert.match(html, /Act/);
  assert.match(html, /Smart irrigation/);
  assert.match(html, /Energy monitor/);
  assert.match(html, /GPS tracker/);
  assert.match(html, /Relay control/);
  assert.match(html, /What works today/i);
  assert.match(html, /Template to live dashboard/i);
  assert.match(html, />Try</);
  assert.match(html, />Build</);
  assert.match(html, />Ship</);
  assert.match(html, />Scale</);
  assert.match(html, /Send your first signal/i);
  assert.doesNotMatch(html, /Build connected products without building the IoT backend/i);
  assert.doesNotMatch(html, /Connect\. Compose\. Control\./i);
  assert.doesNotMatch(html, /Hesh IoT live dashboard preview/i);
  assert.doesNotMatch(html, /Everything between your board and your breakthrough/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});
