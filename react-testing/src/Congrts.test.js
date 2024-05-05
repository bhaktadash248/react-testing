import React from "react";
import { shallow } from "enzyme";

import { findAllByAltText } from "../test/testUtils";

import Congrts from "./Congrts";

const setUp = () => { return shallow(<Congrts/>);}

test('Render without error',()=>{
    const wrapper = setUp();
    const congrtComponent = findAllByAltText(wrapper,'congart-component')
    expect(congrtComponent.length).toBe(1)
})