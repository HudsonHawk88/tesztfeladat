import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import TestComponent from "./views/Teszt/Teszt";

let container = null;

beforeEach(() => {
  // set up a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders learn react link", () => {
  // runs before any tests start running
});

it("useStaleRefresh hook runs correctly", () => {
  act(() => {
    ReactDOM.render(
      <TestComponent url="https://api.github.com/orgs/nodejs" />,
      container
    );
  });
  expect(container.textContent).toBe("loading");
});
