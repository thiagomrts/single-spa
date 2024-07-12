    import React from "react";
    import { render, fireEvent } from "@testing-library/react";
    import App from "./App";

    describe("App Component with React Testing Library", () => {
    test("renders correctly", () => {
        const { getByLabelText, getByRole } = render(<App />);
        expect(getByLabelText(/add items to list/i)).toBeInTheDocument();
        expect(getByRole("button", { name: /add item/i })).toBeInTheDocument();
    });

    test("adds item to list", () => {
        const { getByLabelText, getByRole, getByText } = render(<App />);
        const input = getByLabelText(/add items to list/i);
        const button = getByRole("button", { name: /add item/i });

        fireEvent.change(input, { target: { value: "New Item" } });
        fireEvent.click(button);

        expect(getByText("New Item")).toBeInTheDocument();
    });

    test("does not add empty item to list", () => {
        const { getByRole, queryByRole } = render(<App />);
        const button = getByRole("button", { name: /add item/i });

        fireEvent.click(button);

        expect(queryByRole("listitem")).not.toBeInTheDocument();
    });
    });
