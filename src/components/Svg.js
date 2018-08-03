import React from 'react';

type Props = {
  source: Object,
};

const Svg = ({ source, ...rest }: Props) => (
  <svg {...rest}>
    <use xlinkHref={`#${source.id}`} />
  </svg>
);

export default Svg;
