import React from 'react'
import Map from './Map'
import { shallow } from 'enzyme'

it('renders without failing ', () => {
    const wrapper = shallow(<Map />)
    const viewPort = wrapper.state().viewport
    expect(viewPort).toEqual({
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });
});