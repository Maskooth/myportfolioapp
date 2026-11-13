import React, {act} from "react";
import {createRoot} from "react-dom/client";
import App from "./App";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  })
});

it("renders without crashing", () => {
  const root = createRoot(document.createElement("div"));
  act(() => root.render(<App />));
  act(() => root.unmount());
});
