import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";

import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
};

// describe block is used to group common tests
describe("TodoFooter", () => {
    it("should render the correct amount of incomplete tasks", () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paraElement = screen.getByText(/5 tasks left/i);
        expect(paraElement).toBeInTheDocument();
    });

    it('should render "task" when number of incomplete task is one', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paraElement = screen.getByText(/1 task left/i);
        expect(paraElement).toBeInTheDocument();
    });
});

it('should render the correct amount of incomplete tasks 2', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paraElement = screen.getByText(/1 task left/i);
    expect(paraElement).toBeTruthy();
});

it('should render the correct amount of incomplete tasks 3', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paraElement = screen.getByText(/1 task left/i);
    expect(paraElement).toBeVisible();
});

it('should render the correct amount of incomplete tasks 4', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paraElement = screen.getByText(/1 task left/i);
    expect(paraElement).toContainHTML("p");
});

it('should render the correct amount of incomplete tasks 5', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paraElement = screen.getByTestId("para");
    expect(paraElement).toHaveTextContent("1 task left");
});

it('should render the correct amount of incomplete tasks 6', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paraElement = screen.getByTestId("para");
    expect(paraElement).not.toHaveTextContent("1 tasks left");
});

it('should render the correct amount of incomplete tasks 7', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paraElement = screen.getByTestId("para");
    expect(paraElement.textContent).toBe("1 task left");
});