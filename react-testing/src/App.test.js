import React from "react";
import { shallow } from "enzyme";

import { findAllByAltText } from "../test/testUtils";
import App from './App';

const setUp = () => shallow(<App />)

test('render component withut error',()=>{
    const wrapper = setUp()
    const wrapperComponent = findAllByAltText(wrapper, 'jotto-container')
    expect(wrapperComponent.length).toBe(1)
})