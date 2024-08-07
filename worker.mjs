import { theAnswer } from "./lib.mjs";
globalThis.onmessage = () => globalThis.postMessage(theAnswer);