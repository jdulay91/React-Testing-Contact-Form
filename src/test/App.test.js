import React from "react";
import { render } from "@testing-library/react";
import App from "../App.js";

test("renders App without crashing", () => {
  render(<App />);
});
