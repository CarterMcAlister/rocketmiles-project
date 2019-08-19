import React from 'react';
import { shallow } from 'enzyme';

import HotelCard from './HotelCard';

import { hotelMockData } from '../../test/mockData';

describe('HotelCard', () => {
    const wrapper = shallow(<HotelCard hotel={hotelMockData} />);

    it('should render the hotel data', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});
