import { render, screen } from "@testing-library/react"

import Header from "../Header";

// ***************************** GET BY ****************************
it("should render same text passed into title prop 1", () => {
    render(<Header title="My header" />)
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

// it("should render same text passed into title prop 2", () => {
//     render(<Header title="My header" />)
//     const headingElement = screen.getByRole("heading");
//     expect(headingElement).toBeInTheDocument();
// });

/**
 * If there are two headings (h1 and h3) in Header component then getByRole will give error as there are 2 results
 * So I want element having role heading and has title as "My header" which is passed in name attribute
 * The name attribute selects that particular element
*/
it("should render same text passed into title prop 3", () => {
    render(<Header title="My header" />)
    const headingElement = screen.getByRole("heading", { name: "My header" });
    expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title prop 4", () => {
    render(<Header title="My header" />)
    const headingElement = screen.getByTitle("Akshay-header");
    expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title prop 5", () => {
    render(<Header title="My header" />)
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
});

// ***************************** GET ALL BY ****************************
it("should render same text passed into title prop 8", () => {
    render(<Header title="My header" />)
    const headingElements = screen.getAllByRole("heading")
    expect(headingElements.length).toBe(2);
});

// ***************************** FIND BY ****************************

/**
 * If we are using findBy then always use async, await. If not used then test case will fail
 */
it("should render same text passed into title prop 6", async () => {
    render(<Header title="My header" />)
    const headingElement = await screen.findByText(/My header/i)
    expect(headingElement).toBeInTheDocument();
});

// ***************************** QUERY BY ****************************
it("should render same text passed into title prop 7", () => {
    render(<Header title="My header" />)
    const headingElement = screen.queryByText(/Dogs/i)
    expect(headingElement).not.toBeInTheDocument();
});

