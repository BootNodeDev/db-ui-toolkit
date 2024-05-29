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
const Wrapper = styled.main `
  display: flex;
  flex-grow: 1;
`;
/**
 * Main content container component
 */
const Main = (_a) => {
    var { children, style, className } = _a, restProps = __rest(_a, ["children", "style", "className"]);
    return (React.createElement(Wrapper, Object.assign({ style: style, className: `dbuitkMain ${className ? className : ''}`.trim() }, restProps), children));
};
export default Main;