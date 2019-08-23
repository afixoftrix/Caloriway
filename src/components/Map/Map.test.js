import React from 'react'
import Map from './Map'
import { shallow } from 'enzyme'

it('renders without failing ', () => {
    const wrapper = shallow(<Map />)
    const height = wrapper.state().viewport.height
    expect(height).toEqual(400);
});