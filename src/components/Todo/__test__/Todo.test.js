import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Todo from "../Todo";

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
};

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    tasks.forEach((task) => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    });
};

describe("Todo", () => {
    it("should add todo in todo list when click on Add button", () => {
        render(<MockTodo />);

        // Here can use addTask function
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button", { name: /Add/i });
        fireEvent.change(inputElement, { target: { value: "Go to grocery shop" } });
        fireEvent.click(buttonElement);

        const divElement = screen.getByText(/Go to grocery shop/i);
        expect(divElement).toBeInTheDocument();
    });

    it("should render multiple tasks", () => {
        render(<MockTodo />);
        addTask(["Go to grocery shop", "Clean desk", "Wash hands"])
        const divElements = screen.getAllByTestId("todo-list");
        expect(divElements.length).toBe(3);
    });

    it("task should not have completed class when initially render", () => {
        render(<MockTodo />);
        addTask(["Go to grocery shop"])
        const divElement = screen.getByText(/Go to grocery shop/i);
        expect(divElement).not.toHaveClass("todo-item-active");
    });

    it("task should have completed class when clicked", () => {
        render(<MockTodo />);
        addTask(["Go to grocery shop"])
        const divElement = screen.getByText(/Go to grocery shop/i);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    });
});