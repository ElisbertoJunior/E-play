import { styled } from 'styled-components'
import { colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type ButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  margin-top: ${(props) => props.marginTop || '0'};
  display: flex;
  gap: 24px;
  align-items: flex-end;
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.whiteColor};
    border: 1px solid ${colors.whiteColor};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`

export const TabButton = styled.button<ButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.whiteColor};
  background-color: ${(props) =>
    props.isActive ? colors.GreenColor : colors.BlackColor};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  margin-bottom: 24px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
