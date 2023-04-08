import type { Duration } from 'dayjs/plugin/duration'
import type { TimerFormat } from '../types'
import styled from 'styled-components'
import { paddDuration } from '../util'
import { TimeValue, TimeFormat, BackgroundBox } from './shared/styles'

const Container = styled.div`
  justify-content: center;
  display: grid;
  grid-gap: var(--space-medium);
  grid-template-columns: repeat(2, min-content);
  padding-bottom: var(--space-xLarge);

  ${BackgroundBox}

  @media (min-width: 500px) {
    grid-template-columns: repeat(3, min-content);
  }
`

const TimeFragment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-small);
`

type TimerProps = {
  duration: Duration
  formats?: TimerFormat[]
}

const defaultTimerFormats: TimerFormat[] = ['years', 'months', 'days', 'hours', 'minutes', 'seconds']

export const Timer = ({ duration, formats = defaultTimerFormats }: TimerProps) => {
  return (
    <Container>
      {formats
        .map((item: TimerFormat) => {
          const value = duration.get(item)
          return (
            <TimeFragment>
              <>
                <TimeValue>{paddDuration(value)}</TimeValue>
                <TimeFormat>{item}</TimeFormat>
              </>
            </TimeFragment>
          )
        })
        .filter((e) => e)}
    </Container>
  )
}
