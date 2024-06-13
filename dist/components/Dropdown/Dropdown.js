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
import React, { cloneElement, createRef, useCallback, useEffect, useState, } from 'react';
import { styled } from 'styled-components';
import Items, { BaseItems } from './Items';
const Wrapper = styled.div `
  outline: none;
  position: relative;
  z-index: 0;

  &.fullWidth {
    width: 100%;
  }

  &.isOpen {
    z-index: 50;
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }
`;
Wrapper.defaultProps = {
    className: 'dbuitkDropdown',
    disabled: false,
};
const ButtonWrapper = styled.div `
  background-color: transparent;
  border: none;
  display: flex;
  outline: none;
  padding: 0;
  user-select: none;
  width: 100%;
`;
ButtonWrapper.defaultProps = {
    className: 'dbuitkDropdownButton',
};
/**
 * Dropdown component
 *
 * @param {ReactElement<HTMLButtonElement>} button - The button that opens the dropdown. Must be a button for accessibility reasons.
 * @param {Array<ReactElement> | ReactElement} items - The items of the dropdown, can be an array or a single element.
 * @param {Direction} [direction='downwards'] - The direction of the dropdown (upwards or downwards). Default is downwards.
 * @param {Position} [position='left'] - The position of the dropdown (left, right or center). Default is left.
 * @param {HighlightItem} [highlightItem=undefined] - Adds a `dropdownItemActive` class to the selected item.
 * `true` if you want items to be highlighted when clicked, but don't want a highlighted item by default.
 * A number from `0` to `items.length` if you want a single item highlighted by default.
 * `undefined` disables the functionality, no item is highlighted when clicked.
 * Default is undefined.
 * @param {boolean} [disabled=false] - Whether the dropdown is disabled. Default is false.
 * @param {boolean} [clearDropdownStyle=false] - Whether to clear the dropdown styles. Useful if you don't want to use the default "card like" items wrapper but still preserve the basic functionality. Default is false.
 */
const Dropdown = (_a) => {
    var { button, className, clearDropdownStyle = false, direction = 'downwards', disabled = false, highlightItem, items, position = 'left' } = _a, restProps = __rest(_a, ["button", "className", "clearDropdownStyle", "direction", "disabled", "highlightItem", "items", "position"]);
    /**
     * Sanitizes the highlightItem prop to minimize errors
     */
    const sanitizedHighlightItem = React.useMemo(() => {
        const isHighlightItemNumber = typeof highlightItem === 'number';
        const isHighlightNumberLessThanZero = isHighlightItemNumber && highlightItem < 0;
        const isHighlightNumberGreaterThanItemsLength = Array.isArray(items) && isHighlightItemNumber && highlightItem > items.length - 1;
        if (isHighlightNumberLessThanZero || isHighlightNumberGreaterThanItemsLength) {
            return undefined;
        }
        return highlightItem;
    }, [highlightItem, items]);
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(sanitizedHighlightItem);
    const node = createRef();
    /**
     * Handles the button that opens / closes the dropdown
     */
    const handleButtonClick = useCallback((event) => {
        event.stopPropagation();
        if (disabled) {
            return;
        }
        setIsOpen(!isOpen);
    }, [disabled, isOpen]);
    /**
     * Handles closing the dropdown when the user clicks outside of it
     * @param event MouseEvent - The event object
     */
    useEffect(() => {
        const handleOuterClick = (event) => {
            if (node && node.current && node.current.contains(event.target)) {
                return;
            }
            setIsOpen(false);
        };
        document.addEventListener('mousedown', handleOuterClick);
        return () => {
            document.removeEventListener('mousedown', handleOuterClick);
        };
    }, [node]);
    /**
     * Transforms the props of the element where adequate, i.e.: add some extra
     * functionality to the onClick event
     * @param element ReactElement - The element to transform
     */
    const transformElementProps = (element, index) => {
        const { $closeOnClick, onClick, className } = element.props;
        /**
         * Checks if the dropdown item is active
         */
        const isItemActive = () => {
            /**
             * If sanitizedHighlightItem is undefined highlighting is disabled
             */
            if (sanitizedHighlightItem === undefined) {
                return false;
            }
            return index === activeItem;
        };
        return cloneElement(element, {
            className: `${className ? className : ''} ${isItemActive() ? 'dropdownItemActive' : ''}`.trim(),
            onClick: (event) => {
                event.stopPropagation();
                if ($closeOnClick) {
                    setIsOpen(false);
                }
                setActiveItem(index);
                if (!onClick) {
                    return;
                }
                onClick();
            },
        });
    };
    return (React.createElement(Wrapper, Object.assign({ className: `${isOpen ? 'isOpen' : ''} ${className ? className : ''}`.trim(), disabled: disabled, ref: node }, restProps),
        React.createElement(ButtonWrapper, { onClick: handleButtonClick }, button),
        React.createElement(BaseItems, { as: clearDropdownStyle ? undefined : Items, "$direction": direction, "$position": position, "$isOpen": isOpen }, Array.isArray(items)
            ? items.map((item, index) => {
                return transformElementProps(item, index);
            })
            : transformElementProps(items))));
};
export default Dropdown;
