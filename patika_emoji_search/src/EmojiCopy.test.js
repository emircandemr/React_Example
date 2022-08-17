import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom';

import App from "./App";

test("Emoji Copy" , () => {

    render(<App/>)
    const emojiList = screen.getAllByTestId("emojiList")
    expect(emojiList[0]).toHaveAttribute("data-clipboard-text");

})