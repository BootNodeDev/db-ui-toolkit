var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { styled, css } from 'styled-components';
import { Dark } from './assets/Dark';
import { Light } from './assets/Light';
export const Wrapper = styled.button `
  --base-switch-theme-button-animation-delay: 0.25s;
  --theme-switch-theme-button-background-color: #fff;

  [data-theme='dark'] & {
    --theme-switch-theme-button-background-color: #24263d;
  }

  align-items: center;
  background-color: var(--theme-switch-theme-button-background-color);
  border-radius: 40px;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 4px;
  height: 44px;
  justify-content: space-between;
  padding: 4px 12px;
  position: relative;
  transition: background-color var(--base-switch-theme-button-animation-delay) ease-in-out;
  width: 84px;

  &:active {
    opacity: 0.8;
  }
`;
Wrapper.defaultProps = {
    className: 'dbuitkSwitchThemeButton',
    type: 'button',
};
const IconBackground = styled.div `
  --base-icon-background-size: 36px;
  --base-icon-background-left: 44px;

  [data-theme='dark'] & {
    --base-icon-background-left: 4px;
  }

  background-color: #8b46a4;
  border-radius: 50%;
  display: flex;
  height: var(--base-icon-background-size);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: var(--base-icon-background-left);
  transition: left var(--base-switch-theme-button-animation-delay) ease-in-out;
  width: var(--base-icon-background-size);
  z-index: 1;
`;
const IconCSS = css `
  position: relative;
  z-index: 5;

  * {
    transition: fill var(--base-switch-theme-button-animation-delay) ease-in-out;
  }
`;
const LightIcon = styled(Light) `
  ${IconCSS}
`;
const DarkIcon = styled(Dark) `
  ${IconCSS}
`;
/**
 * SwitchThemeButton component
 *
 * @param theme: string | undefined
 */
const SwitchThemeButton = (_a) => {
    var { onClick } = _a, restProps = __rest(_a, ["onClick"]);
    return (React.createElement(Wrapper, Object.assign({ onClick: onClick }, restProps),
        React.createElement(DarkIcon, null),
        React.createElement(LightIcon, null),
        React.createElement(IconBackground, null)));
};
export default SwitchThemeButton;
