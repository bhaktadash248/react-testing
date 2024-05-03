import Enzyme, { shallow } from "enzyme"
import  EnzymeAdapter  from "@cfaester/enzyme-adapter-react-18"

import App from "./App"

Enzyme.configure({ adapter: new EnzymeAdapter })

const setUp = () => shallow(<App/>)
const findByTestAttr = (wrapper,val) => wrapper.find(`[data-test='${val}']`)

test('render without error', () => {
  const wrapper =  setUp()
  const appComponent = findByTestAttr(wrapper,'component-app')
  expect(appComponent.length).toBe(1)
})

test('render increment button',()=>{
  const wrapper = setUp()
  const button = findByTestAttr(wrapper,'increment-button')
  expect(button.length).toBe(1)
});

test('render counter display',()=>{
  const wrapper = setUp()
  const cunterDisplay = findByTestAttr(wrapper,'counter-test')
  expect(cunterDisplay.length).toBe(1)
})

test('counter display starts at 0',()=>{
  const wrapper = setUp();
  const count = findByTestAttr(wrapper,'count').text()
  expect(count).toBe("0")
});

test('clicking button increment counter display',()=>{
  const wrapper = setUp()
  // find the button
  const button = findByTestAttr(wrapper,'increment-button');
  // click the button
  button.simulate('click');
  // find the display and test the number has been increased
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe("1")
});