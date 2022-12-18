import { render, screen } from "@testing-library/react";
import { createRoot } from 'react-dom/client';

import App from "../../App";

test("renders learn react link", () => {
  render(
    <>
      <App />
      learn react
    </>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div)
  root.render(<App />, div);
  root.unmount()
});
