import { render, screen, fireEvent } from "@testing-library/react";

import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
    it("Should render input element", () => {
        render(<AddInput
            todos={[]}
            setTodos={mockedSetTodo}
        />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });

    it("Should be able to type in input", () => {
        render(<AddInput
            todos={[]}
            setTodos={mockedSetTodo}
        />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: "Go to Grocery shop" } });
        expect(inputElement.value).toBe("Go to Grocery shop")
    });

    it("Should have empty input when add button is clicked", () => {
        render(<AddInput
            todos={[]}
            setTodos={mockedSetTodo}
        />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button", { name: /Add/i });
        fireEvent.change(inputElement, { target: { value: "Go to Grocery shop" } });
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("")
    });
})
