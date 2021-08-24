import { Provider } from '../src';

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
  (Story) => (
    <Provider theme="light">
      <Story />
    </Provider>
  ),
];
