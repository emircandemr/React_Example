/* eslint-disable testing-library/no-render-in-setup */
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';

import Todo from "./index";

describe("Todo Test", () => {

    let button, input;

    beforeEach(() => {
        render(<Todo/>);
        button = screen.getByText("Add");
        input = screen.getByLabelText('todo-input')
    })

    test("Varsayılan Todolar" , () => {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3)
    })
    
    test("Input and Button", () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();

    })

    test("Todo Work" , () => {
        const name = "Mehmet";
        userEvent.type(input,name)
        userEvent.click(button)
        expect(screen.getByText(name)).toBeInTheDocument()
    })

})