import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react from 'react';
import { ComponentPropsWithoutRef, FC, RefAttributes, ReactElement, ComponentProps } from 'react';
import * as styled_components from 'styled-components';
import { RuleSet } from 'styled-components';

/**
 * Common button styles. You can use a combination of these to make any
 * component look like a button (i.e. anchors)
 */
/**
 * Disabled button styles
 */
declare const DisabledButtonCSS: styled_components.RuleSet<object>;
/**
 * Active button styles
 */
declare const ActiveButtonCSS: styled_components.RuleSet<object>;
/**
 * Common button styles
 */
declare const ButtonCSS: styled_components.RuleSet<{
    $variant?: string;
}>;
/**
 * Themed button colors
 */
declare const ButtonVariantCSS: styled_components.RuleSet<{
    $variant?: string;
}>;
interface Props$8 {
    $variant?: string;
}
/**
 * @name Button
 *
 * @description Customizable button
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-button-background-color`
 * - `--theme-button-background-color-hover`
 * - `--theme-button-border-color`
 * - `--theme-button-border-color-hover`
 * - `--theme-button-color`
 * - `--theme-button-color-hover`
 * - `--theme-button-background-color-disabled`
 * - `--theme-button-border-color-disabled`
 * - `--theme-button-color-disabled`
 *
 * **Base CSS variables:**
 *
 * - `--base-button-border-radius`
 * - `--base-button-font-family`
 * - `--base-button-column-gap`
 * - `--base-button-padding`
 * - `--base-button-transition-duration`
 */
declare const Button: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<styled_components_dist_types.Substitute<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void | react.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof react.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | react.RefObject<HTMLButtonElement> | null | undefined;
}>, Props$8>, never>> & string;

/**
 * @name Card
 *
 * @description Customizable card
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-card-background-color`
 * - `--theme-card-border-color`
 * - `--theme-card-box-shadow`
 *
 * **Base CSS variables:**
 *
 * - `--base-card-border-radius`
 * - `--base-card-padding`
 * - `--base-card-box-shadow`
 */
declare const Card: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $variant?: string;
}>> & string;

interface Props$7 extends ComponentPropsWithoutRef<'button'> {
    value: string;
    $variant?: string;
}
/**
 * @name CopyButton
 *
 * @description A button that copies a value to the clipboard
 *
 * @param {string} value - The value to copy to the clipboard
 * @param {MouseEventHandler<HTMLButtonElement>} [onClick=undefined] - The function to call when the button is clicked. Default is undefined.
 * @param {ReactNode} [children=undefined] - The content of the button. Default is the Copy icon.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-copy-button-color`
 * - `--theme-copy-button-color-hover`
 *
 * **Base CSS variables:**
 *
 * - `--base-copy-button-column-gap`
 * - `--base-copy-button-font-family`
 * - `--base-copy-button-transition-duration`
 */
declare const CopyButton: React.FC<Props$7>;

interface Props$6 {
    $variant?: string;
    disabled?: boolean;
}
/**
 * @name Item
 *
 * @description Dropdown item component
 *
 * @param {boolean} [disabled=false] - Disables the dropdown item. Default is false.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-dropdown-item-background-color`
 * - `--theme-dropdown-item-border-color`
 * - `--theme-dropdown-item-color`
 * - `--theme-dropdown-item-background-color-hover`
 * - `--theme-dropdown-item-border-color-hover`
 * - `--theme-dropdown-item-color-hover`
 * - `--theme-dropdown-item-background-color-active`
 * - `--theme-dropdown-item-border-color-active`
 * - `--theme-dropdown-item-color-active`
 *
 * **Base CSS variables:**
 *
 * - `--base-dropdown-item-transition-duration`
 * - `--base-dropdown-item-padding`
 * - `--base-dropdown-item-column-gap`
 *
 */
declare const Item: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<styled_components_dist_types.Substitute<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | react.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof react.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | react.RefObject<HTMLDivElement> | null | undefined;
}>, Props$6>, never>> & string;

/**
 * @name Items
 *
 * @description Items component - Default container for dropdown items.
 */
declare const Items: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $variant?: string;
}>> & string;

interface DropdownExposedProps {
    close: () => void;
}
interface Options extends ComponentPropsWithoutRef<'div'>, RefAttributes<DropdownExposedProps> {
    $variant?: string;
    button: ReactElement<HTMLButtonElement>;
    closeOnClick?: boolean;
    defaultActiveItem?: number;
    direction?: Direction;
    disabled?: boolean;
    highlightActiveItem?: boolean;
    items: Array<ReactElement> | ReactElement;
    onItemSelect?: (index: number) => void;
    position?: Position;
}
/**
 * @name Dropdown
 *
 * @description A Dropdown component.
 *
 * @param {ReactElement<HTMLButtonElement>} button - The button that opens the dropdown. Must be a button for accessibility reasons.
 * @param {Array<ReactElement> | ReactElement} items - The items of the dropdown, can be an array or a single element. Items can be either an Item component or any other React element.
 * @param {Direction} [direction='downwards'] - The direction of the dropdown (upwards or downwards). Default is downwards.
 * @param {Position} [position='left'] - The position of the dropdown (left, right or center). Default is left.
 * @param {boolean} [closeOnClick=true] - Close the dropdown when the item is clicked. Default is true.
 * @param {HighlightItem} [highlightActiveItem=true] - Optionally highlight the selected item. Default is true.
 * @param {boolean} [disabled=false] - Whether the dropdown is disabled. Default is false.
 * @param {number} [defaultActiveItem=-1] - The index of the item that is active by default. Default is -1.
 * @param {Function} [onItemSelect] - A function that is called when an item is selected.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-dropdown-background-color`
 * - `--theme-dropdown-border-color`
 * - `--theme-dropdown-box-shadow`
 *
 * **Base CSS variables:**
 *
 * - `--base-dropdown-border-radius`
 * - `--base-dropdown-transition-duration`
 */
declare const Dropdown: FC<Options>;

type Position = 'center' | 'left' | 'right';
type Direction = 'downwards' | 'upwards';

interface Props$5 extends ComponentProps<'a'> {
    $variant?: string;
}
/**
 * @name ExternalLink
 *
 * @description A button that opens a link in a new tab.
 *
 * @param {React.HTMLAttributeAnchorTarget} target - The target attribute specifies where to open the linked document. Default is '_blank'.
 * @param {ReactNode} [children=undefined] - The content of the button. Default is the ExternalLink icon.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-external-link-button-color`
 * - `--theme-external-link-button-color-hover`
 *
 * **Base CSS variables:**
 *
 * - `--base-external-link-column-gap`
 * - `--base-font-family`
 * - `--base-transition-duration-sm`
 */
declare const ExternalLink: React.FC<Props$5>;

/**
 * @name Footer
 *
 * @description Barebones footer component
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-footer-background-color: Footer background color`
 * - `--theme-footer-text-color: Footer text color`
 */
declare const Footer: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {
    $variant?: string;
}>> & string;

interface Props$4 extends ComponentPropsWithoutRef<'div'> {
    $variant?: string;
    actionButton?: ReactElement<HTMLButtonElement>;
    icon?: ReactElement;
    message?: string | ReactElement;
    title?: string;
}
/**
 * @name GeneralMessage
 *
 * @description General error component.
 *
 * @param {ReactElement<HTMLButtonElement>} [actionButton] - Optional action button. Can be used to reload the page, redirect the user somewhere, etc.
 * @param {Array<ReactElement> | ReactElement} [icon] - Optional icon to display. Default is an alert icon.
 * @param {string | ReactElement} [message] - Optional message to display. Default is 'Something went wrong.'
 * @param {string} [title] - Optional title to display. Default is 'Error'.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-general-message-background-color`
 * - `--theme-general-message-border-color`
 * - `--theme-general-message-box-shadow`
 * - `--theme-general-message-color-icon`
 * - `--theme-general-message-color-title`
 * - `--theme-general-message-color-text`
 * - `--theme-general-message-color-message-background`
 *
 * **Base CSS variables:**
 *
 * - `--base-general-message-border-radius`
 * - `--base-general-message-padding`
 * - `--base-general-message-row-gap`
 * - `--base-general-message-message-border-radius`
 * - `--base-general-message-message-padding`
 * - `--base-general-message-message-row-gap`
 * - `--base-general-message-box-shadow`
 */
declare const GeneralMessage: React.FC<Props$4>;

interface Props$3 extends Props$4 {
    $closeOnOutsideClick?: boolean;
    $onClose?: () => void;
}
/**
 * @name GeneralMessageDialog
 *
 * @description General error component shown in an HTML dialog element. It shares the same props as the GeneralMessage component plus the following:
 *
 * @param {() => void}  [$onClose] - An optional function to be called when the dialog is closed.
 * @param {boolean}     [$closeOnOutsideClick] - If true, the dialog will close when clicking outside of it. Default is true.
 */
declare const GeneralMessageDialog: FC<Props$3>;

/**
 * @name Header
 *
 * @description Barebones header component
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-header-background-color: Header background color`
 * - `--theme-header-text-color: Header text color`
 */
declare const Header: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, {
    $variant?: string;
}>> & string;

/**
 * @name InnerContainer
 *
 * @description Container for inner content
 */
declare const InnerContainer: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;

/**
 * @name Logo
 *
 * @description Default dAppBooster logo
 */
declare const Logo: FC<ComponentPropsWithoutRef<'img'>>;

/**
 * @name LogoMini
 *
 * @description dAppBooster mini logo component
 */
declare const LogoMini: React.FC<ComponentProps<'svg'>>;

/**
 * @name Main
 *
 * @description Main content container component
 */
declare const Main: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, never>> & string;

interface SkeletonProps extends ComponentProps<'div'> {
    $animate?: boolean;
    $animationDuration?: string;
}
/**
 * @name SkeletonLoading
 *
 * @description A loading skeleton component
 *
 * @param {boolean} [$animate=true] - Whether the loading animation should be displayed. Default is true.
 * @param {string} [$animationDuration='2s'] - The duration of the loading animation. Default is '2s'.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-skeleton-loading-background-color`
 * - `--theme-skeleton-loading-background-color-end`
 *
 * **Base CSS variables:**
 *
 * - `--base-skeleton-loading-border-radius`
 */
declare const SkeletonLoading: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<styled_components_dist_types.Substitute<styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | react.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof react.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | react.RefObject<HTMLDivElement> | null | undefined;
}>, SkeletonProps>, SkeletonProps>> & string;

interface Props$2 extends ComponentProps<'svg'> {
    $strokeWidth?: number;
    $variant?: string;
    $size?: number;
}
/**
 * @name Spinner
 *
 * @description Spinner Component - A simple animated spinner.
 *
 * @param {string} [$strokeWidth] - Optional stroke width for the spinner. Default is 8.
 * @param {number} [$size] - Optional size for the spinner. Default is 50.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-spinner-color`
 *
 * **Base CSS variables:**
 *
 * - `--base-spinner-animation-time`
 */
declare const Spinner: React.FC<Props$2>;

/**
 * @name SwitchThemeButton for dAppBooster
 *
 * @description A button that switches between light and dark themes.
 *
 * @param {MouseEventHandler<HTMLButtonElement>} onClick - Function that switches the theme.
 */
declare const SwitchThemeButton: React.FC<ComponentPropsWithoutRef<'button'>>;

/**
 * @name Text
 *
 * @description Text component
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-color-text`
 *
 * **Base CSS variables:**
 *
 * - `--base-text-font-size`
 */
declare const Text: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {
    $variant?: string;
}>> & string;

type TextfieldStatus = 'error' | 'ok' | undefined;
interface Props$1 extends ComponentProps<'input'> {
    $status?: TextfieldStatus | undefined;
    $variant?: string;
}
/**
 * Textfield CSS
 */
declare const TextfieldCSS: styled_components.RuleSet<Props$1>;
/**
 * @name Textfield
 *
 * @description Input component
 *
 * @param {TextfieldStatus} [$status=undefined] - The status of the textfield. Defaults to undefined.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-textfield-color`
 * - `--theme-textfield-color-active`
 * - `--theme-textfield-color-error`
 * - `--theme-textfield-color-ok`
 * - `--theme-textfield-background-color`
 * - `--theme-textfield-background-color-active`
 * - `--theme-textfield-border-color`
 * - `--theme-textfield-border-color-active`
 * - `--theme-textfield-border-color-error`
 * - `--theme-textfield-border-color-ok`
 * - `--theme-textfield-placeholder-color`
 * - `--theme-textfield-box-shadow`
 * - `--theme-textfield-box-shadow-active`
 *
 * **Base CSS variables:**
 *
 * - `--base-textfield-height`
 * - `--base-textfield-border-radius`
 * - `--base-textfield-font-size`
 * - `--base-textfield-vertical-padding`
 * - `--base-textfield-horizontal-padding`
 * - `--base-textfield-transition-duration`
 */
declare const Textfield: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, Props$1>> & string;

/**
 * @name Title
 *
 * @description Title component
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-color-title`
 *
 * **Base CSS variables:**
 *
 * - `--base-title-font-size`
 */
declare const Title: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {
    $variant?: string;
}>> & string;

/**
 * @name Toast
 *
 * @description Toast component
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-toast-background-color`
 * - `--theme-toast-color`
 *
 * **Base CSS variables:**
 *
 * - `--base-toast-border-radius`
 * - `--base-toast-padding`
 * - `--base-toast-transition-duration`
 */
declare const Toast: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $variant?: string;
}>> & string;

/**
 * @name Wrapper
 *
 * @description Main wrapper component
 */
declare const Wrapper: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;

interface DropdownOptions extends Options {
    id: string;
}
interface Props {
    Dropdown: FC<DropdownOptions>;
    close: (id: string) => void;
}
/**
 * @name useDropdown
 * @description A hook that returns a Dropdown component and its exposed methods
 *
 * @returns {Props} - The `Dropdown` component and the hook's methods.
 * @returns {FC<DropdownOptions>} Dropdown - The `Dropdown` component.
 * @returns {(id: string) => void} close - A function that closes the dropdown with the given id.
 */
declare const useDropdown: () => Props;

/**
 * CSS media queries can't get their values from CSS variables, so we need to
 * define them here as JS constants.
 */
declare const breakpoints: {
    readonly desktopStart: "1025px";
    readonly desktopWideStart: "1281px";
    readonly tabletLandscapeStart: "769px";
    readonly tabletPortraitStart: "481px";
};
type Breakpoint = keyof typeof breakpoints;
/**
 * @param breakpoint - a breakpoint value, e.g. 'desktopStart'
 * @param css - a CSS rule set
 * @returns string - a media query string
 */
declare const breakpointMediaQuery: (breakpoint: Breakpoint, css: RuleSet<object>) => string;

/**
 * Responsive container padding for all breakpoints
 */
declare const ContainerPadding: styled_components.RuleSet<object>;

interface VarName {
    componentName: string;
    componentVariant?: string;
    customPropertyName: string;
    customPropertyPrefix?: 'theme' | 'base';
}
/**
 * @name cssCustomPropertyName
 *
 * @description Generate a CSS custom property name.
 *
 * @example cssCustomPropertyName({ componentName: 'button', customPropertyName: 'background-color' })
 * // Output: --theme-button-background-color
 *
 * @example cssCustomPropertyName({ componentName: 'button', componentVariant: 'primary', customPropertyName: 'background-color' })
 * // Output: --theme-button-primary-background-color
 *
 * @example cssCustomPropertyName({ componentName: 'button', customPropertyName: 'border-radius', customPropertyPrefix: 'base' })
 * // Output: --base-button-border-radius
 *
 * @example cssCustomPropertyName({ componentName: 'button', componentVariant: 'primary', customPropertyName: 'border-radius' customPropertyPrefix: 'base' })
 * // Output: --base-button-primary-border-radius
 *
 */
declare const cssCustomPropertyName: ({ componentName, componentVariant, customPropertyName, customPropertyPrefix, }: VarName) => string;

export { ActiveButtonCSS, type Breakpoint, Button, ButtonCSS, ButtonVariantCSS, Card, ContainerPadding, CopyButton, type Direction, DisabledButtonCSS, Dropdown, type DropdownExposedProps, ExternalLink, Footer, GeneralMessage, GeneralMessageDialog, Header, InnerContainer, Item, Items, Logo, LogoMini, Main, type Position, SkeletonLoading, Spinner, SwitchThemeButton, Text, Textfield, TextfieldCSS, type Props$1 as TextfieldProps, type TextfieldStatus, Title, Toast, Wrapper, breakpointMediaQuery, breakpoints, cssCustomPropertyName, useDropdown };
