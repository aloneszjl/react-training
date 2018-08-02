import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Icon from './svg/components';
import { move } from './ducks';

type Props = {
  move: Function,
};
const Logo = ({ move }: Props) => (
  <div onClick={() => move({ x: 20, y: 30 })}>
    <Icon name="logo" style={{ fill: 'blue' }} />
  </div>
);

const ConnectedForm = reduxForm({
  form: 'test',
})(Logo);

export default connect(
  null,
  { move },
)(ConnectedForm);
