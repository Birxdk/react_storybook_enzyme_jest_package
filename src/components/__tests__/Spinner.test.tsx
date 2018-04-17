import { shallow } from 'enzyme';
import * as React from 'react';
import 'jest-styled-components';
import * as renderer from 'react-test-renderer';
import Spinner from '../Spinner';

describe('Wait spinner', () => {
  it('renders the spinner without children', () => {
    const component = renderer.create(<Spinner />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the spinner with children', () => {
    const component = renderer.create(<Spinner>Spinning message</Spinner>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
