import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './HomePage';

describe('HomePage Tests', () => {
  it.each([
    ['a', true],
    ['aa', true],
    ['cfg', false]
  ])('Should check if palindrome value (%p, %p)', (value: string, expected: boolean) => {
    const component = shallow(<HomePage />);

    const inputElement = component.find('input');

    const onChange = inputElement.prop('onChange');
    if (onChange) onChange({ target: { value } });

    const h1Element = component.find('h1');

    expect(h1Element.prop('children')).toBe(`${expected}`);
  });
});
