import { Container } from './styles'
import { PacmanLoader } from 'react-spinners'
import { colors } from '../../styles'

const Loader = () => {
  return (
    <Container>
      <PacmanLoader color={colors.whiteColor} />
    </Container>
  )
}

export default Loader
