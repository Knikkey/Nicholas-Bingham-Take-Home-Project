import "@testing-library/jest-dom";
import RootLayout from "../src/app/layout";
import Home from "../src/app/page";
import { setupStore } from "../src/redux/store";
import { renderWithProviders } from "./utils";
import userEvent from "@testing-library/user-event";
import { screen, waitFor } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  __esModule: true,
  useRouter: () => ({
    push: jest.fn(),
  }),
  useServerInsertedHTML: () => ({}),
}));

describe("Application Form", () => {
  const user = userEvent.setup();
  it("renders properly", () => {
    renderWithProviders(
      <RootLayout>
        <Home />
      </RootLayout>
    );
    expect(
      screen.getByRole("heading", { name: "Job Application Form" })
    ).toBeInTheDocument();
  });

  it("updates data properly", async () => {
    const store = setupStore();
    renderWithProviders(<Home />, { store });
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    await user.type(emailInput, "example@example.com");
    const state = store.getState().jobAppForm.data;
    expect(state.email).toBe("example@example.com");
  });

  it("redirects to confirmation page when data is valid", async () => {
    const store = setupStore();
    renderWithProviders(<Home />, { store });
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    const phoneInput = screen.getByRole("textbox", {
      name: /phone/i,
    });
    const firstNameInput = screen.getByRole("textbox", {
      name: /first name/i,
    });
    const lastNameInput = screen.getByRole("textbox", {
      name: /last name/i,
    });
    const submitButton = screen.getByRole("button", {
      name: /submit/i,
    });
    await user.type(emailInput, "example@example.com");
    await user.type(phoneInput, "1234567");
    await user.type(firstNameInput, "Ricky");
    await user.type(lastNameInput, "Bobby");
    await user.click(submitButton);
    waitFor(() => {
      expect(
        screen.queryByRole("heading", { name: "Application Submitted" })
      ).toBeInTheDocument();
    });
  });

  it("dooes not redirect to confirmation page when data is invalid", async () => {
    const store = setupStore();
    renderWithProviders(<Home />, { store });
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    const phoneInput = screen.getByRole("textbox", {
      name: /phone/i,
    });
    const firstNameInput = screen.getByRole("textbox", {
      name: /first name/i,
    });
    const lastNameInput = screen.getByRole("textbox", {
      name: /last name/i,
    });
    const submitButton = screen.getByRole("button", {
      name: /submit/i,
    });
    await user.type(emailInput, "example@example");
    await user.type(phoneInput, "123456");
    await user.type(firstNameInput, "Ricky");
    await user.type(lastNameInput, "Bobby");
    await user.click(submitButton);
    waitFor(() => {
      expect(
        screen.queryByRole("heading", { name: "Application Submitted" })
      ).not.toBeInTheDocument();
    });
  });
});
