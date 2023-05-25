import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderBar, Links, LinkItem, CartButton } from './styles'
import logo from '../../images/logo.svg'
import cart from '../../images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

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
      <CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={cart} alt="Carinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
