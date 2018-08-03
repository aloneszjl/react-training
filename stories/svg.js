import React from 'react';
import { storiesOf } from '@storybook/react';
import { Svg } from '../src/components';
import logoSvg from '../src/svg/logo.svg';

export default () =>
  storiesOf('Svg', module)
    .add('logo', () => <Svg source={logoSvg} />)
    .add('logo-red', () => <Svg source={logoSvg} style={{ fill: 'yellow' }} />);
