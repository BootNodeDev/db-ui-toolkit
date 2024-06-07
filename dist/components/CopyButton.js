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
const Copy = (_a) => {
    var restProps = __rest(_a, []);
    return (React.createElement("svg", Object.assign({ fill: "currentColor", height: "15", viewBox: "0 0 24 24", width: "15", xmlns: "http://www.w3.org/2000/svg" }, restProps),
        React.createElement("path", { className: "fill", clipRule: "evenodd", d: "M10 9C9.44771 9 9 9.44771 9 10V21C9 21.5523 9.44771 22 10 22H21C21.5523 22 22 21.5523 22 21V10C22 9.44771 21.5523 9 21 9H10ZM15 7V3C15 2.44772 14.5523 2 14 2H3C2.44772 2 2 2.44772 2 3V14C2 14.5523 2.44772 15 3 15H7V10C7 8.34315 8.34315 7 10 7H15ZM17 7H21C22.6569 7 24 8.34315 24 10V21C24 22.6569 22.6569 24 21 24H10C8.34315 24 7 22.6569 7 21V17H3C1.34315 17 0 15.6569 0 14V3C0 1.34315 1.34315 0 3 0H14C15.6569 0 17 1.34315 17 3V7Z", fillRule: "evenodd" })));
};
const Wrapper = styled.button `
  align-items: center;
  background: transparent;
  border: none;
  color: var(--copy-button-color, #000);
  column-gap: var(--base-button-gap, 8px);
  cursor: pointer;
  display: flex;
  font-family: var(--base-font-family, sans-serif);
  font-size: var(--base-button-font-size, 15px);
  font-weight: 400;
  height: fit-content;
  justify-content: center;
  line-height: 1;
  outline: none;
  padding: 0;
  text-decoration: none;
  transition:
    background-color 0.15s,
    border-color 0.15s,
    color 0.15s;
  user-select: none;
  white-space: nowrap;
  width: fit-content;

  &:hover {
    color: var(--copy-button-color-hover, #8b46a4);
  }

  &:active {
    opacity: 0.8;
  }
`;
/**
 * CopyButton component, a button that copies a value to the clipboard
 *
 * @param {string} value - The value to copy to the clipboard
 * @param {MouseEventHandler<HTMLButtonElement>} [onClick=undefined] - The function to call when the button is clicked. Default is undefined.
 * @param {ReactNode} [children=undefined] - The content of the button. Default is the Copy icon.
 */
const CopyButton = (_a) => {
    var { children, onClick, value } = _a, restProps = __rest(_a, ["children", "onClick", "value"]);
    const onCopy = (e) => {
        navigator.clipboard.writeText(value);
        onClick && onClick(e);
    };
    return (React.createElement(Wrapper, Object.assign({ onClick: onCopy }, restProps), children ? children : React.createElement(Copy, null)));
};
export default CopyButton;
