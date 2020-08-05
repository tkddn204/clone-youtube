import React from 'react';
import {render} from '@testing-library/react';
import CountryCode from '..';

describe('<CountryCodeSpan />', () => {
  test('render default CountryCodeSpan', () => {
    const {container} = render(
      <CountryCode/>
    );

    const countryCode = navigator.language.slice(-2);

    expect(container).toHaveTextContent(countryCode);
  });
});