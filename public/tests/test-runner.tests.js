import { Hook } from "../libs/test-runner.min.js";
const testRunner_tests = {
  [Hook.RequiredBeforeAny]: (context) => {
    console.log("before");
  },
  "should run code-test elements from run all button": (context) => {
  }
};
export {
  testRunner_tests as default
};
