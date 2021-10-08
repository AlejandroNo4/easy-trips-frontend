import React from 'react';
import { render } from '@testing-library/react';
import NoSession from '../../components/NoSession';

describe('No Session component', () => {
  it('Render component wothout errors', () => {
    const component = render(<NoSession />);
    expect(component).toMatchSnapshot();
  });

  it('Precense of a button', () => {
    const component = render(<NoSession />);
    const button = component.getAllByRole('button');
    expect(button).toBeTruthy();
    expect(button.length).toBe(2);
    expect(button.length).not.toBe(0);
  });
});
