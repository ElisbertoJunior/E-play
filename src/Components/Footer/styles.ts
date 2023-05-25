import styled from 'styled-components'
import { colors } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  background-color: ${colors.GreyColor};
  padding: 32px 0;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  color: ${colors.whiteColor};
  font-size: 16px;
  font-weight: bold;
`
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`
export const Link = styled(HashLink)`
  color: ${colors.GrayTextColor};
  text-decoration: none;
  margin-right: 8px;
  cursor: pointer;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
