import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;

    margin-top: 20px;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.GreyColor};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a,
  span {
    color: ${colors.whiteColor};
    font-weight: bold;
  }

  h1 {
    line-height: 0;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`
export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }

  @media (min-width: ${breakpoints.tablet}) {
    &.is-open {
      display: none;
    }
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`
export const CartButton = styled.span`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  span {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`
export const Hamburguer = styled.div`
  width: 32px;
  cursor: pointer;
  span {
    height: 2px;
    display: block;
    background-color: ${colors.whiteColor};
    width: 100%;
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
