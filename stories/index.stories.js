import React from 'react';
import { storiesOf } from '@storybook/react';
import Svg from '../src/components/Svg';

import logoSvg from '../src/svg/logo.svg';

storiesOf('Svg', module)
  .add('logo', () => <Svg source={logoSvg} />)
  .add('logo-red', () => <Svg source={logoSvg} style={{ fill: 'red' }} />);
