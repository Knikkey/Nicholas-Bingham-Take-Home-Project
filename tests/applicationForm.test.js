import "@testing-library/jest-dom";
import RootLayout from "../src/app/layout";
import App from "../src/app/page";
import { renderWithProviders } from "./utils";
import { screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  __esModule: true,
  useRouter: () => ({
    push: jest.fn(),
  }),
  useServerInsertedHTML: () => ({}),
}));

test("app renders", () => {
  renderWithProviders(
    <RootLayout>
      <App />
    </RootLayout>
  );

  expect(
    screen.getByRole("heading", { name: "Job Application Form" })
  ).toBeInTheDocument();
});
