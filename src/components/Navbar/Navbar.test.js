import React from 'react'
import Navbar from './index'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
    shallow(<Navbar />)
});