const test = require("node:test");
const assert = require("node:assert");

test("health endpoint response structure", async () => {
  const response = await fetch("http://localhost:3000/health");

  assert.strictEqual(response.status, 200);

  const data = await response.json();

  assert.strictEqual(data.status, "healthy");
  assert.strictEqual(data.message, "API is running");
});