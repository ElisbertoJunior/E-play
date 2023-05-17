import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../images/logo.svg'
import cart from '../../images/carrinho.svg'

const Header = () => {
  return (
    <HeaderBar>
      <div>
        <Link to={'/'}>
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to={'/categories'}>Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <LinkCart href="#">
        0 - produto(s)
        <img src={cart} alt="Carinho" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
