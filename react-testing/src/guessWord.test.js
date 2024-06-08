import React from "react";
import { mount } from "enzyme";

import App from './App';
import { findAllByAltText } from "../test/testUtils";

const setUp = (state = {}) => {
    const wrapper = mount(<App />)

    const inputBox = findAllByAltText(wrapper, 'input-box');
    inputBox.simulate('change', { target: { value: 'train' } });

    const buttonSubmit = findAllByAltText(wrapper, 'submit-button');
    buttonSubmit.simulate('click', { preventDefault() { } })
}

describe('no words guessed', () => {
    let wrapper; 
    beforeEach(() => {
        wrapper = setUp({
            secretWord: 'party',
            success: false,
            guessedWords: []
        })
    });

    test('Create Guessed words table with one row',()=>{
        
    })
})