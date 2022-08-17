import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom';

import App from "./App";

test("Emoji Filter" , () => {
    render(<App/>)
    const searchInput = screen.getByTestId("search")
    fireEvent.change(searchInput, { target: { value: "yum" } });
    const emojiList = screen.getAllByTestId("emojiList");
    expect(emojiList.length).toEqual(1)
})