import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import HotelList from './HotelList';
import HotelCard from './HotelCard';
import NoResults from './NoResults';
import Loader from './Loader';

import { hotelsList } from '../../test/mockData';

describe('HotelList', () => {
    // Mount in act call to properly trigger useEffect and state updates
    let wrapper;
    act(() => {
        wrapper = mount(<HotelList hotels={hotelsList} sortOrder={'recommended'} nameFilter={''} isLoading={false} />);
    });

    it('should display a list of hotel data in the default sort order', () => {
        expect(wrapper.find(HotelCard)).toHaveLength(hotelsList.length);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should sort the hotels by price in ascending order', () => {
        wrapper.setProps({ sortOrder: 'low-to-high' });
        wrapper.update();

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should sort the hotels by price in descending order', () => {
        wrapper.setProps({ sortOrder: 'high-to-low' });
        wrapper.update();

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should filter the hotels by name', () => {
        wrapper.setProps({ nameFilter: 'omni' });
        wrapper.update();

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should show all returned hotels in default order when filters are reset', () => {
        wrapper.setProps({ nameFilter: '', sortOrder: 'recommended' });
        wrapper.update();

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should display a loader until results are returned', () => {
        wrapper.setProps({ isLoading: true });
        wrapper.update();
        expect(wrapper.exists(Loader)).toEqual(true);

        wrapper.setProps({ isLoading: false });
        wrapper.update();
        expect(wrapper.exists(Loader)).toEqual(false);
    });

    it('should display a not found page if there are no results for the selected filters', () => {
        wrapper.setProps({ nameFilter: 'no-results' });
        wrapper.update();

        expect(wrapper.exists(NoResults)).toEqual(true);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
