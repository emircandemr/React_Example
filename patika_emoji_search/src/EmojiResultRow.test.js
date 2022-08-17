import React from 'react';
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';

import App from "./App";


test("Has the emoji list been rendered successfully?" , () => {

    render(<App/>);

    const emojiList = screen.getAllByTestId("emojiList")

    expect(emojiList.length).toEqual(20)

})