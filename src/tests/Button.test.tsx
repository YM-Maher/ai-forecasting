// src/tests/Button.test.tsx (Jest + React Testing Library)
import { render, screen } from "@testing-library/react";
import Button from "@/components/ui/Button";

test("renders button", () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});
