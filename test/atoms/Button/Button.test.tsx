import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { lightTheme, Button } from '../../../src';

test('Renders correctly', () => {
  const component = renderer.create(
    <ThemeProvider theme={lightTheme}>
      <Button label="Click here!" variant="raised" />
    </ThemeProvider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
