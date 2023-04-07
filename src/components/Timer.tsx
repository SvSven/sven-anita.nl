import { useState, useEffect } from 'preact/hooks'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import type { Duration, DurationUnitType } from 'dayjs/plugin/duration'
import { Button } from './Button'
import styled, { css } from 'styled-components'

dayjs.extend(duration)

const BackgroundBox = css`
  padding: var(--space-medium);
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 10px;
`

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

const TimeValue = styled.span`
  font-variant-numeric: tabular-nums;
  font-weight: var(--fontWeight-bold);
  font-size: var(--typeScale-2);
  color: var(--color-blue);
`

const TimeFormat = styled.span`
  text-transform: capitalize;
  font-weight: var(--fontWeight-normal);
  font-size: var(--typeScale-1);
  color: var(--color-white);
`

const Controls = styled.div`
  margin-top: var(--space-xLarge);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${BackgroundBox}
`

const Output = styled.div`
  display: flex;
  gap: var(--space-small);
  justify-content: center;
  align-items: center;
  height: 50px;
  text-align: center;
  margin-top: var(--space-small);
`

const getTimeSince = (date: string): Duration => dayjs.duration(dayjs().diff(date))
const paddDuration = (value: number): string => (value < 10 ? `0${value}` : `${value}`)

type TimerProps = {
  startDate: string
  formats?: DurationUnitType[]
}

const defaultTimerFormats: DurationUnitType[] = ['years', 'months', 'days', 'hours', 'minutes', 'seconds']

export const Timer = ({ startDate, formats = defaultTimerFormats }: TimerProps) => {
  const [duration, setDuration] = useState<Duration | null>(getTimeSince(startDate))
  const [durationTime, setDurationTime] = useState<number | null>(null)
  const [durationFormat, setDurationFormat] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => setDuration(getTimeSince(startDate)), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [setDuration, getTimeSince, setDurationFormat])

  if (!duration) return null

  if (!durationTime) {
    setDurationFormat('months')
    setDurationTime(Math.ceil(duration.as('months')))
  }

  const getDurationTime = (format: DurationUnitType) => {
    setDurationFormat(format)
    setDurationTime(Math.ceil(duration.as(format)))
  }

  return (
    <>
      <Container>
        {formats
          .map((item: DurationUnitType) => {
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

      <Controls>
        <div>
          <Button onClick={() => getDurationTime('months')}>months</Button>
          <Button onClick={() => getDurationTime('weeks')}>weeks</Button>
          <Button onClick={() => getDurationTime('days')}>days</Button>
        </div>
        <Output>
          {durationTime && (
            <>
              <TimeValue>{durationTime}</TimeValue>
              <TimeFormat>{durationFormat}</TimeFormat>
            </>
          )}
        </Output>
      </Controls>
    </>
  )
}
