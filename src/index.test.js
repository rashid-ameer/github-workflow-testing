// tests/index.test.js
import { greet, add } from "./index.js";

// A simple "assert" helper — no libraries needed
function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    process.exit(1); // exit with error code — GitHub Actions sees this as FAILED
  }
}

// --- Run the tests ---
console.log("\nRunning tests...\n");

assert(add(2, 3) === 5, "add(2, 3) should return 5");
assert(add(0, 0) === 0, "add(0, 0) should return 0");
assert(add(-1, 1) === 0, "add(-1, 1) should return 0");
assert(greet("Ali") === "Hello, Ali!", "greet should return correct string");
assert(greet("World") === "Hello, World!", "greet should work with World");

console.log("\nAll tests passed! 🎉\n");
