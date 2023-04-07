import styled from 'styled-components'
import { HTMLAttributes } from 'react'

const StyledButton = styled.button`
  background: var(--color-darkBlue);
  color: var(--color-white);
  padding: var(--space-small);
  margin: var(--space-small);
  border-radius: 5px;
  border: none;
  font-weight: var(--fontWeight-normal);

  cursor: pointer;
  font-family: 'Alkatra', cursive;
  font-size: var(--typeScale-0);
`

type ButtonProps = HTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}
