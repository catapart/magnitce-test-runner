import { Hook, expect } from "../libs/test-runner.min.js";
const beforeAfter_tests = {
  [Hook.RequiredBeforeAny]: async () => {
    console.log("this should run once before any other test is run");
  },
  [Hook.BeforeAll]: async () => {
    console.log("this should run once before all tests");
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    await expect(true).toBe(true);
  },
  [Hook.BeforeEach]: async () => {
    console.log("this should run before each test");
  },
  [Hook.AfterEach]: async () => {
    console.log("this should run after each test");
  },
  [Hook.AfterAll]: async () => {
    console.log("this should run once after all tests");
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    await expect(true).toBe(true);
  },
  [Hook.RequiredAfterAny]: async () => {
    console.log("this should run once after any other test has been run");
  },
  "should be useful for before-after test": async () => {
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    await expect(true).toBe(true);
  },
  "should also be useful for before-after test": async () => {
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    await expect(true).toBe(true);
  },
  "should be a third useful test for before-after test": async () => {
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    await expect(true).toBe(true);
  }
};
export {
  beforeAfter_tests as default
};
