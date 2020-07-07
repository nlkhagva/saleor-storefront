import 'jest-styled-components';

import { shallow } from 'enzyme';
import React from 'react';

import { BookingProduct } from './';

describe("<BookingProduct />", () => {
  it("exists", () => {
    const wrapper = shallow(<BookingProduct productUrl="https://www.zalando.co.uk/pier-one-rucksack-black-pi954o001-q11.html" />);

    expect(wrapper.exists()).toEqual(true);
  });
});
