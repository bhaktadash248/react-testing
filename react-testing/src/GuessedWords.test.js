import React from "react";
import { shallow } from "enzyme";

import { findAllByAltText } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const setUp = () => { return shallow(<GuessedWords/>);}

test('Render the component without error',()=>{
    const wrapper = setUp();
    const guessWord = findAllByAltText(wrapper,'guessed-word');
    expect(guessWord.length).toBe(1)
})