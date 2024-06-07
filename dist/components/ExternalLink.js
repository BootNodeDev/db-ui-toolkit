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
import { styled } from 'styled-components';
import React from 'react';
const Link = (_a) => {
    var restProps = __rest(_a, []);
    return (React.createElement("svg", Object.assign({ fill: "currentColor", height: "12.5", viewBox: "0 0 10 10", width: "12.5", xmlns: "http://www.w3.org/2000/svg" }, restProps),
        React.createElement("path", { className: "fill", clipRule: "evenodd", d: "M1.11111 1.11111V8.88892H8.88892V5H10V8.88892C10 9.5 9.5 10 8.88892 10H1.11111C0.494442 10 0 9.5 0 8.88892V1.11111C0 0.5 0.494442 0 1.11111 0H5V1.11111H1.11111ZM6.11111 1.11111V0H10V3.88889H8.88892V1.89444L3.42777 7.35558L2.64444 6.57223L8.10558 1.11111H6.11111Z", fillRule: "evenodd" })));
};
const Wrapper = styled.a `
  align-items: center;
  color: var(--external-link-button-color, #000);
  column-gap: var(--base-button-gap, 8px);
  cursor: pointer;
  display: flex;
  font-family: var(--base-font-family, sans-serif);
  font-size: var(--base-button-font-size, 15px);
  font-weight: 400;
  height: fit-content;
  justify-content: center;
  outline: none;
  padding: 0;
  transition:
    background-color 0.15s,
    border-color 0.15s,
    color 0.15s;
  white-space: nowrap;
  width: fit-content;

  &:hover {
    color: var(--external-link-button-color-hover, #8b46a4);
    text-decoration: none;
  }

  &:active {
    opacity: 0.8;
  }
`;
/**
 * ExternalLink component, a button that opens a link in a new tab.
 *
 * @param {React.HTMLAttributeAnchorTarget} target - The target attribute specifies where to open the linked document. Default is '_blank'.
 * @param {ReactNode} [children=undefined] - The content of the button. Default is the ExternalLink icon.
 */
const ExternalLink = (_a) => {
    var { children, target = '_blank' } = _a, restProps = __rest(_a, ["children", "target"]);
    return (React.createElement(Wrapper, Object.assign({ target: target }, restProps), children ? children : React.createElement(Link, null)));
};
export default ExternalLink;
