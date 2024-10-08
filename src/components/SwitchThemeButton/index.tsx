import { type ComponentPropsWithoutRef } from 'react'
import { styled, css, keyframes } from 'styled-components'

import Dark from '@/src/components/SwitchThemeButton/assets/Dark'
import Light from '@/src/components/SwitchThemeButton/assets/Light'

const IconWrapper = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--base-switch-theme-button-active-state-size);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: var(--base-switch-theme-button-active-state-size);
  z-index: 5;
`

const IconWrapperLight = styled(IconWrapper)`
  left: var(--base-switch-theme-button-left-end);

  [data-theme='dark'] & {
    cursor: pointer;
  }
`

const IconWrapperDark = styled(IconWrapper)`
  left: var(--base-switch-theme-button-left-start);

  [data-theme='light'] & {
    cursor: pointer;
  }
`

const Wrapper = styled.button.attrs(({ type = 'button' }) => ({ type }))`
  --base-switch-theme-button-animation-delay: var(--base-animation-time, 0.3s);
  --base-switch-theme-button-active-state-size: 36px;
  --base-switch-theme-button-left-start: 4px;
  --base-switch-theme-button-left-end: 44px;
  --base-switch-theme-button-active-state-left: var(--base-switch-theme-button-left-end);

  [data-theme='dark'] & {
    --theme-switch-theme-button-background-color: #24263d;
    --base-switch-theme-button-active-state-left: var(--base-switch-theme-button-left-start);
  }

  background-color: var(--theme-switch-theme-button-background-color, #fff);
  border-radius: 40px;
  border: none;
  height: 44px;
  justify-content: space-between;
  padding: 4px 12px;
  position: relative;
  transition:
    background-color var(--base-switch-theme-button-animation-delay) ease-in-out,
    border-color var(--base-animation-time-sm, 0.2s) ease-in-out;
  width: 84px;

  [data-theme='light'] &:active {
    ${IconWrapperDark} {
      opacity: 0.5;
    }
  }

  [data-theme='dark'] &:active {
    ${IconWrapperLight} {
      opacity: 0.5;
    }
  }
`

const ActiveState = styled.div`
  border-radius: 50%;
  background-color: var(--theme-active-state-background-color, #8b46a4);
  height: var(--base-switch-theme-button-active-state-size);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: var(--base-switch-theme-button-active-state-left);
  transition: left var(--base-switch-theme-button-animation-delay) ease-in-out;
  width: var(--base-switch-theme-button-active-state-size);
  z-index: 1;
`

// This animation rotates the icon a full 360 degrees
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const IconCSS = css`
  cursor: pointer;
  position: relative;
  z-index: 10;

  path {
    transition: fill var(--base-switch-theme-button-animation-delay) ease-in-out;
  }
`

const LightIcon = styled(Light)`
  ${IconCSS}

  [data-theme='light'] & {
    animation: ${rotate} var(--base-switch-theme-button-animation-delay) linear;
    cursor: default;
  }
`

const DarkIcon = styled(Dark)`
  ${IconCSS}

  [data-theme='dark'] & {
    animation: ${rotate} var(--base-switch-theme-button-animation-delay) linear;
    cursor: default;
  }
`

/**
 * @name SwitchThemeButton for dAppBooster
 *
 * @description A button that switches between light and dark themes.
 *
 * @param {MouseEventHandler<HTMLButtonElement>} onClick - Function that switches the theme.
 */
const SwitchThemeButton: React.FC<ComponentPropsWithoutRef<'button'>> = ({
  onClick,
  ...restProps
}: ComponentPropsWithoutRef<'button'>) => {
  return (
    <Wrapper onClick={onClick} {...restProps}>
      <IconWrapperDark>
        <DarkIcon />
      </IconWrapperDark>
      <IconWrapperLight>
        <LightIcon />
      </IconWrapperLight>
      <ActiveState />
    </Wrapper>
  )
}

export default SwitchThemeButton
