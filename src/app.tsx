import { Timer } from './components/Timer'
import styled from 'styled-components'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

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
  const startDate = '2018-10-08 15:30'

  return (
    <Container>
      <StyledHeading>{dayjs(startDate).format('dddd, MMMM Do YYYY')}</StyledHeading>
      <Wrapper>
        <Timer startDate={startDate} />
      </Wrapper>
    </Container>
  )
}
