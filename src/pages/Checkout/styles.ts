import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Row = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 24px;
`
export const InputGroup = styled.div`
  flex: auto;
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${colors.whiteColor};
    border: 1px solid ${colors.whiteColor};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`
