import { render, screen } from "@testing-library/react";
import Input, {
  InputError,
} from "../src/_components/form-elements/input/Input";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Email input", () => {
  const user = userEvent.setup();
  beforeEach(() => {
    render(
      <>
        <Input
          aria-label="Email"
          id="email"
          placeholder="Email"
          required=""
          type="email"
          pattern="[^@s]+@[^@s]+.[^@s]+[a-z]{1,4}"
        />
        <InputError>Error</InputError>
      </>
    );
  });

  it("validates common email pattern properly", async () => {
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    await user.type(emailInput, "example@example.com");
    expect(emailInput).toBeValid();
  });

  it("validates chained domain email pattern properly", async () => {
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    await user.type(emailInput, "example@example.ca.gov");
    expect(emailInput).toBeValid();
  });

  it("validates email with no @ properly", async () => {
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    await user.type(emailInput, "example_example.ca.gov");
    expect(emailInput).toBeInvalid();
  });

  it("validates email with no domain properly", async () => {
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    const errorMessage = screen.getByText(/error/i);
    await user.type(emailInput, "example@example");
    expect(errorMessage).toBeInTheDocument();
  });
});

describe("Phone number input", () => {
  const user = userEvent.setup();
  beforeEach(() => {
    render(
      <>
        <Input
          aria-label="Phone Number"
          id="phone"
          required=""
          placeholder="Phone Number"
          pattern="[0-9]"
          minLength="7"
          type="tel"
        />
        <InputError>Error</InputError>
      </>
    );
  });

  it("validates too few numbers", async () => {
    const phoneInput = screen.getByRole("textbox", {
      name: /phone number/i,
    });
    await user.type(phoneInput, "111111");
    expect(phoneInput).toBeInvalid();
  });
});
