import styled, { css } from 'styled-components'

export const BackgroundBox = css`
  padding: var(--space-medium);
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 10px;
`

export const TimeValue = styled.span`
  font-variant-numeric: tabular-nums;
  font-weight: var(--fontWeight-bold);
  font-size: var(--typeScale-2);
  color: var(--color-blue);
`

export const TimeFormat = styled.span`
  text-transform: capitalize;
  font-weight: var(--fontWeight-normal);
  font-size: var(--typeScale-1);
  color: var(--color-white);
`
