import { Timer } from './components/Timer'
import styled from 'styled-components'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { getBackgroundImage } from './util'
import Router from 'preact-router'
import { useEffect } from 'preact/hooks'

dayjs.extend(advancedFormat)

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

const Page = ({ date, path }: PageProps) => {
  useEffect(() => {
    const backgroundImg = getBackgroundImage(path)
    document.body.style.background = `no-repeat center center linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImg})`
  }, [path])

  return (
    <Container>
      <StyledHeading>{dayjs(date).format('dddd, MMMM Do YYYY')}</StyledHeading>
      <Wrapper>
        <Timer startDate={date} />
      </Wrapper>
    </Container>
  )
}
