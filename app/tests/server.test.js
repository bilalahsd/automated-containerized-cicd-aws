const test = require("node:test");
const assert = require("node:assert");
const app = require("../server");

const server = app.listen(0);

test("health endpoint response structure", async () => {
  const { port } = server.address();

  const response = await fetch(`http://localhost:${port}/health`);

  assert.strictEqual(response.status, 200);

  const data = await response.json();

  assert.strictEqual(data.status, "healthy");
  assert.strictEqual(data.message, "API is running");
});

test.after(() => {
  server.close();
});