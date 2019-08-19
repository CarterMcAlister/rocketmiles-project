import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
    it('renders the component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.app-container').exists()).toBe(true);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
