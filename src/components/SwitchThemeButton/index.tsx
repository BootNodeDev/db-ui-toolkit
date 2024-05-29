import React, { PropsWithChildren } from 'react'
import { styled, css } from 'styled-components'

import { Dark } from './assets/Dark'
import { Light } from './assets/Light'

export const Wrapper = styled.button`
  --animation-delay: 0.25s;

  align-items: center;
  background: #fff;
  border-radius: 40px;
  border: none;
  box-shadow:
    0 2.1px 4.625px 0 rgb(0 0 0 / 5%),
    0 9.6px 13px 0 rgb(0 0 0 / 8%),
    0 24.3px 34.875px 0 rgb(0 0 0 / 10%),
    0 48px 80px 0 rgb(0 0 0 / 15%);
  cursor: pointer;
  display: flex;
  gap: 4px;
  height: 44px;
  justify-content: space-between;
  padding: 4px 12px;
  position: relative;
  width: 84px;

  &:active {
    opacity: 0.8;
  }
`

const Background = styled.div<{ theme: string | undefined }>`
  --size: 36px;

  background-color: #692581;
  border-radius: 50%;
  display: flex;
  height: var(--size);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ theme }) => (theme === 'light' ? '44px' : '4px')};
  transition: left var(--animation-delay) ease-in-out;
  width: var(--size);
  z-index: 1;
`

const IconCSS = css`
  position: relative;
  z-index: 5;

  * {
    transition: fill var(--animation-delay) ease-in-out;
  }
`

const LightIcon = styled(Light)`
  ${IconCSS}
`

const DarkIcon = styled(Dark)`
  ${IconCSS}
`

interface Props extends PropsWithChildren {
  onClick: () => void
  theme: string | undefined
}

/**
 * SwitchThemeButton component
 *
 * @param theme: string | undefined
 * @param onClick: () => void
 */
const SwitchThemeButton: React.FC<Props> = ({ theme, onClick, ...restProps }) => {
  return (
    <Wrapper onClick={onClick} {...restProps}>
      <DarkIcon />
      <LightIcon />
      <Background theme={theme} />
    </Wrapper>
  )
}

export default SwitchThemeButton
