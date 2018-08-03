import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  footer: boolean,
  block: boolean,
  borderRounded: boolean,
  primary: boolean,
  danger: boolean,
  disabled: boolean,
  flat: boolean,
  hideBorder: boolean,
  onClick: Function,
  darkGrey: boolean,
  smallBorderRounded: boolean,
  hideDisabledBg: boolean,
};

const StyledButton = styled.button`
  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `};
  ${({ backgroundColor, theme }) =>
    !!backgroundColor &&
    css`
      background-color: ${theme[backgroundColor] || backgroundColor};
    `};
  ${({ size, theme }) =>
    css`
      font-size: ${size ? theme.size.text[size] : theme.size.text.xtlarge};
    `};
  ${({ footer, theme }) =>
    footer &&
    css`
      height: ${theme.hd(theme.footerHeight)};
      flex: 1;
      align-items: center;
      justify-content: center;
    `};
  ${({ primary, theme }) =>
    primary &&
    css`
      color: white;
      background-color: ${theme.primary};
    `};
  ${({ danger, theme }) =>
    danger &&
    css`
      color: white;
      background-color: ${theme.danger};
    `};
  ${({ borderRounded, theme }) =>
    borderRounded &&
    css`
      border-radius: ${theme.hd(0.25)};
    `};
  ${({ smallBorderRounded, theme }) =>
    smallBorderRounded &&
    css`
      border-radius: ${theme.hd(0.03)};
    `};
`;

const ButtonConnectedFlat = StyledButton.extend`
  ${({ flat }) =>
    flat &&
    css`
      background-color: white;
    `};
  ${({ primary, flat, theme }) =>
    primary &&
    flat &&
    css`
      color: ${theme.primary};
      border: 1px solid ${theme.primary};
    `};
  ${({ danger, flat, theme }) =>
    danger &&
    flat &&
    css`
      color: ${theme.danger};
      border: 1px solid ${theme.danger};
    `};
  ${({ secondary, flat, theme }) =>
    secondary &&
    flat &&
    css`
      color: ${theme.secondaryText};
      border: 1px solid ${theme.secondaryText};
    `};
  ${({ darkGrey, flat, theme }) =>
    darkGrey &&
    flat &&
    css`
      color: ${theme.darkGreyColor};
      border: 1px solid ${theme.darkGreyColor};
    `};
`;

const ButtonConnectedDisabled = ButtonConnectedFlat.extend`
  ${({ disabled, flat }) =>
    disabled &&
    !flat &&
    css`
      color: #ffffff;
      background-color: rgba(255, 83, 70, 0.4);
      border: none;
    `};
  ${({ hideBorder }) =>
    hideBorder &&
    css`
      border: none;
    `};
  ${({ disabled, flat, hideDisabledBg }) =>
    disabled &&
    flat &&
    css`
      position: relative;
      color: #ccc;
      background-color: ${hideDisabledBg ? '' : '#f0f1f3'};
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.5);
      }
    `};
`;

const Button = ({ disabled, onClick, ...restProps }: Props) => (
  <ButtonConnectedDisabled
    onClick={e => !disabled && onClick && onClick(e)}
    disabled={disabled}
    {...restProps}
  />
);

Button.defaultProps = {
  footer: false,
  block: false,
  borderRounded: false,
  primary: false,
  danger: false,
  secondary: false,
  disabled: false,
  hideBorder: false,
  flat: false,
  smallBorderRounded: false,
  darkGrey: false,
  hideDisabledBg: false,
  onClick: () => {},
};

export default Button;
