import React from "react";
import { render } from "@testing-library/react";
import ButtonsPage from "./pages/ButtonsPage";

test("renders Buttons page", () => {
  const { getByText } = render(<ButtonsPage />);
  const header = getByText(/Buttons examples/i);
  expect(header).toBeInTheDocument();
});
