import { Timer } from './components/Timer'
import { TimerControls } from './components/TimerControls'
import styled from 'styled-components'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import duration from 'dayjs/plugin/duration'
import { getBackgroundImage } from './util'
import Router from 'preact-router'
import { useEffect, useState } from 'preact/hooks'
import type { Duration } from 'dayjs/plugin/duration'

dayjs.extend(advancedFormat)
dayjs.extend(duration)

const Container = styled.div`
  margin: 0 auto;
  padding: var(--space-large);
`

const StyledHeading = styled.h1`
  font-size: var(--typeScale-3);
  font-weight: var(--fontWeight-bold);
  margin: 0;
  color: var(--color-white);
  text-align: center;
`

const Wrapper = styled.div`
  max-width: 600px;
  margin-top: var(--space-large);
`

export function App() {
  return (
    <Router>
      <Page path="/" date="2018-10-08 15:30" />
      <Page path="/emma" date="2023-01-29 05:27" />
    </Router>
  )
}

type PageProps = {
  path: string
  date: string
}

const getTimeSince = (date: string): Duration => dayjs.duration(dayjs().diff(date))

const Page = ({ date, path }: PageProps) => {
  const [duration, setDuration] = useState<Duration | null>(getTimeSince(date))

  useEffect(() => {
    const interval = setInterval(() => setDuration(getTimeSince(date)), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [setDuration, getTimeSince])

  useEffect(() => {
    const backgroundImg = getBackgroundImage(path)
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImg})`
  }, [path])

  return (
    <Container>
      <StyledHeading>{dayjs(date).format('dddd, MMMM Do YYYY')}</StyledHeading>
      {duration && (
        <Wrapper>
          <Timer duration={duration} />
          <TimerControls duration={duration} />
        </Wrapper>
      )}
    </Container>
  )
}
