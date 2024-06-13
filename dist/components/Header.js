import { styled } from 'styled-components';
/**
 * Barebones header component
 */
const Header = styled.header `
  background-color: var(--theme-header-background-color, transparent);
  color: var(--theme-header-text-color, #000);
  flex-grow: 0;
  flex-shrink: 0;
`;
Header.defaultProps = {
    className: 'dbuitkHeader',
};
export default Header;
