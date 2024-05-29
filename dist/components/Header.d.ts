import React, { HTMLAttributes, PropsWithChildren } from 'react';
interface Props extends HTMLAttributes<HTMLElement>, PropsWithChildren {
}
/**
 * Barebones header component
 */
declare const Header: React.FC<Props>;
export default Header;
