import React from "react";
import {mount} from 'enzyme'
import { findAllByAltText, checkProps } from "../test/testUtils";
import App from './App';

const setUp = () => mount(<App/>)