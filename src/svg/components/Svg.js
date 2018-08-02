import React from 'react';

type Props = {
  symbolData: Object,
};

const Svg = ({ symbolData, ...rest }: Props) => (
  <svg {...rest}>
    <use xlinkHref={`#${symbolData.id}`} />
  </svg>
);

export default Svg;
