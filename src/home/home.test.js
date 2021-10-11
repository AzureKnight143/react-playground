import { screen, render, fireEvent } from "@testing-library/react";
import Home from "./home";

beforeEach(() => {
  render(<Home />);
});

it("has a title", () => {
  expect(screen.getByText("Home")).toBeInTheDocument();
});

it("has a email input", () => {
  expect(screen.getByLabelText("Email")).toHaveValue("");
});

it("has a password input", () => {
  expect(screen.getByLabelText("Password")).toHaveValue("");
});

it("has a submit button", () => {
  expect(screen.getByRole("button", { type: "submit" }));
});

describe("Name of the group", () => {
  it("handles valid form submit", () => {
    const alert = jest.spyOn(window, "alert");
    const email = "test@test.com";
    const password = "123";

    fireEvent.change(screen.getByLabelText("Email"), { target: { value: email } });
    fireEvent.change(screen.getByLabelText("Password"), { target: { value: password } });
    fireEvent.click(screen.getByRole("button", { type: "submit" }));

    expect(alert).toHaveBeenCalledWith(email + " " + password);
    expect(screen.getByRole("form")).toHaveClass("was-validated");
  });

  it("handles invalid form submit ", () => {
    const alert = jest.spyOn(window, "alert");
    const email = "test";
    const password = "";

    fireEvent.change(screen.getByLabelText("Email"), { target: { value: email } });
    fireEvent.change(screen.getByLabelText("Password"), { target: { value: password } });
    fireEvent.click(screen.getByRole("button", { type: "submit" }));

    expect(alert).not.toHaveBeenCalled();
    expect(screen.getByRole("form")).toHaveClass("was-validated");
  });
});
