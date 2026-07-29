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

test("server-renders the complete Hesh IoT landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Hesh IoT \| Build connected products faster<\/title>/i);
  assert.match(html, /Build connected products without building the IoT backend/i);
  assert.match(html, /href="http:\/\/iot\.rectronx\.com"/i);
  assert.match(html, /href="https:\/\/github\.com\/mahesh020795\/sparkiot"/i);
  assert.match(html, /Connect\. Compose\. Control\./i);
  assert.match(html, /Everything between your board and your breakthrough/i);
  assert.match(html, /SparkIoT\.virtualWrite/);
  assert.match(html, /RM25/);
  assert.match(html, /Frequently asked questions/i);
  assert.match(html, /Built for the next thing you connect/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});
