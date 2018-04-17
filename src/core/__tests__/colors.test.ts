import { shallow } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as colors from '../colors';

const shade = '#DDDDDD';
const grey = '#F6F6F6';
const black = '#000000';
const white = '#FFFFFF';

describe('Colors', () => {
  it('checks the colors', () => {
    expect(colors.black).toBe(black);
    expect(colors.grey).toBe(grey);
    expect(colors.shade).toBe(shade);
    expect(colors.white).toBe(white);
  });
});
