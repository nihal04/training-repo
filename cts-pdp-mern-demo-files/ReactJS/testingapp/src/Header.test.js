import { render, screen } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import Header from "./Header";

describe("Testing React App", () => {
  let element;
  beforeEach(() => {
    element = document.createElement("div");
    document.body.appendChild(element);
  });

  test("Header should have React Testing brand name", () => {
    render(<Header />);
    expect(screen.getByText("React Testing")).toBeInTheDocument();
  });

  test("Header comopnent should have navbar-brand class", () => {
    render(<Header />);
    expect(screen.getByTestId("brand")).toHaveClass("navbar-brand");
  });

  test("Header should have navbar with 5 hyperlinks", () => {
    act(() => {
      createRoot(element).render(<Header />);
    });
    const count = element.querySelectorAll("a").length;
    expect(count).toBe(5);
  });

  test("Header should have links with nav-link class", () => {
    act(() => {
      createRoot(element).render(<Header />);
    });
    const links = element.querySelectorAll("a");
    for (let i = 1; i < links.length; i++) {
      expect(links[i]).toHaveClass("nav-link");
    }
  });
});
