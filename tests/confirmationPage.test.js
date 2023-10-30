import "@testing-library/jest-dom";
import ConfirmationPage from "../src/app/confirmation-page/page";
import { renderWithProviders } from "./utils";
import { screen, waitFor } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  __esModule: true,
  useRouter: () => ({
    push: jest.fn(),
  }),
  useServerInsertedHTML: () => ({}),
}));

describe("Confirmation page", () => {
  it("redirects properly", () => {
    const mockStore = {
      someSlice: {
        data: {
          firstName: "Ricky",
          lastName: "Bobby",
          email: "ricky@bobby",
          phone: 123456,
        },
      },
    };
    renderWithProviders(<ConfirmationPage />, { mockStore });
    waitFor(() => {
      expect(
        screen.queryByRole("heading", { name: "Application Submitted" })
      ).not.toBeInTheDocument();
    });
  });
});
