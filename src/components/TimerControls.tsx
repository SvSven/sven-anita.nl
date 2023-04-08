import { useState } from 'preact/hooks'
import { Button } from './Button'
import styled from 'styled-components'
import { TimeValue, TimeFormat, BackgroundBox } from './shared/styles'
import { roundDuration } from '../util'
import type { Duration } from 'dayjs/plugin/duration'
import type { TimerFormat } from '../types'

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

type TimerControlsProps = {
  duration: Duration
  formats?: TimerFormat[]
}

const defaultFormats: TimerFormat[] = ['months', 'weeks', 'days', 'hours']

export const TimerControls = ({ duration, formats = defaultFormats }: TimerControlsProps) => {
  const [currentTime, setCurrentTime] = useState<number>(roundDuration(duration.as(formats[0])))
  const [currentFormat, setCurrentFormat] = useState<TimerFormat>(formats[0])

  const getDuration = (format: TimerFormat) => {
    setCurrentFormat(format)
    setCurrentTime(roundDuration(duration.as(format)))
  }

  return (
    <Controls>
      <div>
        {formats.map((format: TimerFormat) => (
          <Button onClick={() => getDuration(format)}>{format}</Button>
        ))}
      </div>
      <Output>
        {currentTime && (
          <>
            <TimeValue>{currentTime}</TimeValue>
            <TimeFormat>{currentFormat}</TimeFormat>
          </>
        )}
      </Output>
    </Controls>
  )
}
