import { expect } from "../libs/test-runner.min.js";
class Library {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
  async accessDelayedTarget(timeout = 1e3) {
    await new Promise((resolve) => setTimeout(resolve, timeout));
    return "Delayed";
  }
  accessDOM(selector) {
    return document.querySelector(selector);
  }
  accessStorage(type = "local") {
    if (type == "local") {
      this.addAndRemoveFromLocalStorage();
    } else if (type == "session") {
      this.addAndRemoveFromSessionStorage();
    } else if (type == "indexedDB") {
      this.addAndRemoveFromIndexedDB();
    }
    return;
  }
  addAndRemoveFromLocalStorage() {
    console.log("local");
  }
  addAndRemoveFromSessionStorage() {
    console.log("session");
  }
  addAndRemoveFromIndexedDB() {
    console.log("indexedDB");
  }
}
const tests = {
  "should add": async () => {
    const library = new Library();
    const result = library.add(5, 7);
    await expect(result).toBe(12);
  },
  "should await delayed result": async () => {
    const library = new Library();
    const result = library.accessDelayedTarget();
    await expect(result).toBe("Delayed");
  },
  "should subtract (but doesn't, to demonstrate a default failure)": async () => {
    const library = new Library();
    const result = library.add(5, 7);
    await expect(result).toBe(-2);
  }
};
export {
  tests
};
