import React from 'react';
import ReactLoadable from 'react-loadable';

const Loadable = importComponent =>
  ReactLoadable({
    loader: () => importComponent(),
    loading: () => <div />,
  });

const ICONS = {
  logo: Loadable(() => import('./Logo')),
  logo1: Loadable(() => import('./Logo')),
};

export default ({ name, ...rest }: { name: string }) => {
  const Icon = ICONS[name];
  return <Icon {...rest} />;
};
