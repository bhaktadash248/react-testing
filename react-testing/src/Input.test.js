import React, { useState } from "react";
import { shallow } from "enzyme";
import { checkProps, findAllByAltText } from "../test/testUtils";
import Input from "./Input";

const setUp = () => shallow(<Input />)
const wrapper = setUp();

// mocking entire module for destrusturing usestate on import
var mockCurrentGuess = jest.fn()
jest.mock('react', ()=>({
    ...jest.requireActual('react'),
    useState:(initialState) => [initialState, mockCurrentGuess]
}))

test('render without error', () => {
    const inputComponent = findAllByAltText(wrapper, 'component-input')
    expect(inputComponent.length).toBe(1)
})

test('input render without error', () => {
    const textInput = findAllByAltText(wrapper, 'input-box')
    expect(textInput.length).toBe(1)
})

test('submit button render withut error',()=>{
    const submitButton = findAllByAltText(wrapper, 'submit-button');
    expect(submitButton.length).toBe(1)
})

test('does not throw warning with expected props',()=>{
    checkProps(Input,{secretWord: 'party'})
})

test('input text onchange render',()=>{
    const inputChange = findAllByAltText(wrapper,'input-box')
    const mockEvent = {target:{value:'train'}}
    inputChange.simulate('change', mockEvent)
    expect(mockCurrentGuess).toHaveBeenCalledWith('train')
})

test('button click render',()=>{
    const buttonClick = findAllByAltText(wrapper,'submit-button');
    const mockEvent = {target:{value:'train'}};
    buttonClick.simulate('click')
})