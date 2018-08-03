import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf, configure, addDecorator } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import { Button } from '../src/components';
import theme from '../src/styles/styles';
import '../src/styles/common.scss';
import svg from './svg';

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(() => {
  svg();
  storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('normal', () => {
      const label = text('Name', 'Arunoda Susiripala');
      return <Button disabled={boolean('Disabled', false)}>{label}</Button>;
    })
    .add('primary', () => <Button primary>提交</Button>);
}, module);
