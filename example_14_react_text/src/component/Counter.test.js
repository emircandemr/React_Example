/* eslint-disable testing-library/no-render-in-setup */
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';

import Counter from "./Counter";

//test adında bir fonksiyon oluşturuyoruz.
//test adı veriyoruz
//render edilecek componenti çağırıyoruz
//İşlem yapılacak eleman seçilir , bu örnekte Increase butonuna ulaştık. 

//! 1.YOL
// test("increase button", () => {
    
//     render(<Counter/>);

//     const count = screen.getByText("0")
//     const increaseBtn = screen.getByText("Increase")

//     userEvent.click(increaseBtn)

//     expect(count).toHaveTextContent("1")


// })

// test("decrease button", () => {
    
//     render(<Counter/>);

//     const count = screen.getByText("0")
//     const decreaseBtn = screen.getByText("Decrease")

//     userEvent.click(decreaseBtn)

//     expect(count).toHaveTextContent("-1")


// })

// test("Button Test", () => {
    
//     render(<Counter/>);

//     const count = screen.getByText("0")
//     const decreaseBtn = screen.getByText("Decrease")
//     const increaseBtn = screen.getByText("Increase")


//     userEvent.click(increaseBtn)

//     expect(count).toHaveTextContent("1")

//     userEvent.click(decreaseBtn)

//     expect(count).toHaveTextContent("0")


// })

//! 2.YOL

describe("Counter Test" , () => {


    let increaseBtn,decreaseBtn,count ;

    beforeEach( () => {
        render(<Counter/>)
        decreaseBtn = screen.getByText("Decrease")
        increaseBtn = screen.getByText("Increase");
        count = screen.getByText("0")
    })

    test("increase button", () => {
        userEvent.click(increaseBtn)
        expect(count).toHaveTextContent("1")
    })
    
    test("decrease button", () => {
        userEvent.click(decreaseBtn)
        expect(count).toHaveTextContent("-1")
    })


})