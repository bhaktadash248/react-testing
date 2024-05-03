import Enzyme, { shallow } from "enzyme"
import  EnzymeAdapter  from "@cfaester/enzyme-adapter-react-18"

import App from "./App"

Enzyme.configure({ adapter: new EnzymeAdapter })

test('render without error', () => {
  const wrapper =  shallow(<App/>)
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length)
})

test('render increment button',()=>{

});

test('render counter display',()=>{

})

test('counter display starts at 0',()=>{

});

test('clicking button increment counter display',()=>{

});