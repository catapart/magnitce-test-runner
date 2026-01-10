import { expect } from "../libs/test-runner.min.js";
const directAccess_tests = {
  "should have access to the console api": async () => {
    console.log("New Wave? Next Wave? Dream Wave? OR Cyberpunk?");
  },
  "should have access to the DOM": async () => {
    const testRunner = document.querySelector("test-runner");
    await expect(testRunner).toBeDefined();
  },
  "should have access to canvas api": async () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    await expect(context).toBeDefined();
  }
};
export {
  directAccess_tests as default
};
