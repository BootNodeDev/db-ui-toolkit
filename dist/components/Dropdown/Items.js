import { styled, css } from 'styled-components';
export const BaseItems = styled.div `
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  min-width: 90px;
  position: absolute;
  white-space: nowrap;

  ${({ $position }) => $position === 'left' &&
    css `
      left: 0;
    `}

  ${({ $position }) => $position === 'right' &&
    css `
      right: 0;
    `}

  ${({ $position }) => $position === 'center' &&
    css `
      left: 50%;
      transform: translateX(-50%);
    `}

  ${({ $direction }) => $direction === 'downwards' &&
    css `
      top: calc(100% + 10px);
    `}

  ${({ $direction }) => $direction === 'upwards' &&
    css `
      bottom: calc(100%);
    `}
`;
BaseItems.defaultProps = {
    $direction: 'downwards',
    $isOpen: false,
    $position: 'left',
    className: 'dropdownItems',
};
const Items = styled(BaseItems) `
  background-color: var(--theme-dropdown-background-color, #fff);
  border-color: var(--theme-dropdown-border-color, #fff);
  border-radius: var(--base-border-radius, 8px);
  border-style: solid;
  border-width: 1px;
  box-shadow: var(--theme-dropdown-box-shadow, 0 9.6px 13px 0 rgb(0 0 0 / 8%));
`;
export default Items;
