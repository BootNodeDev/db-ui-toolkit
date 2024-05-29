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
const ComponentWrapper = styled.div `
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;
const Wrapper = (_a) => {
    var { children, style, className } = _a, restProps = __rest(_a, ["children", "style", "className"]);
    return (React.createElement(ComponentWrapper, Object.assign({ style: style, className: `dbuitkWrapper ${className ? className : ''}`.trim() }, restProps), children));
};
export default Wrapper;
