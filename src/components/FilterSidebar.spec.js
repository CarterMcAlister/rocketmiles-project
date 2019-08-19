import React from 'react';
import { shallow } from 'enzyme';

import FilterSidebar from './FilterSidebar';

describe('FilterSidebar', () => {
    let sortOrderMock = 'recommended';
    const setSortOrderMock = jest.fn(value => (sortOrderMock = value));

    let nameFilterMock = '';
    const setNameFilterMock = jest.fn(value => (nameFilterMock = value));

    const wrapper = shallow(
        <FilterSidebar
            sortOrder={sortOrderMock}
            setSortOrder={setSortOrderMock}
            nameFilter={nameFilterMock}
            setNameFilter={setNameFilterMock}
        />
    );

    it('should display with default values', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should update the sort order when dropdown is changed', () => {
        const newDropdownVal = 'low-to-high';
        wrapper.find('select').simulate('change', { target: { value: newDropdownVal } });

        expect(setSortOrderMock.mock.calls.length).toBe(1);
        expect(sortOrderMock).toEqual(newDropdownVal);
    });

    it('should update the name filter when text is entered', () => {
        const inputText = 'chicago';
        wrapper.find('input').simulate('change', { target: { value: inputText } });

        expect(setNameFilterMock.mock.calls.length).toBe(1);
        expect(nameFilterMock).toEqual(inputText);
    });

    it('should reset the filter values when reset button is clicked', () => {
        wrapper.find('button').simulate('click');

        expect(nameFilterMock).toEqual('');
        expect(sortOrderMock).toEqual('recommended');
    });
});
