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
import { styled } from 'styled-components';
import LogoDark from './assets/logo-dark.svg';
import LogoLight from './assets/logo-light.svg';
const Wrapper = styled.img `
  --base-logo: url(${LogoLight});

  [data-theme='light'] & {
    --base-logo: url(${LogoLight});
  }

  [data-theme='dark'] & {
    --base-logo: url(${LogoDark});
  }

  content: var(--base-logo);
  display: block;
  flex-shrink: 0;
`;
Wrapper.defaultProps = {
    alt: 'Logo',
};
/**
 * Default Logo component
 */
const Logo = (_a) => {
    var { style, className } = _a, restProps = __rest(_a, ["style", "className"]);
    return (React.createElement(Wrapper, Object.assign({ className: `dbuitkLogo ${className ? className : ''}`.trim(), style: style }, restProps)));
};
export default Logo;
