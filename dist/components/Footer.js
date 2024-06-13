import { styled } from 'styled-components';
/**
 * Barebones footer component
 */
const Footer = styled.footer `
  align-items: center;
  background-color: var(--theme-footer-background-color, transparent);
  color: var(--theme-footer-text-color, #000);
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
`;
Footer.defaultProps = {
    className: 'dbuitkFooter',
};
export default Footer;
