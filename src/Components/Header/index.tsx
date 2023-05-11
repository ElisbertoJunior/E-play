import { HeaderBar, Links, LinkItem, LinkCart } from './styles'

const Header = () => {
  return (
    <HeaderBar>
      <div>
        <img src="images/logo.svg" alt="EPLAY" />
        <nav>
          <Links>
            <LinkItem>
              <a href="#">Categorias</a>
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
        <img src={'icons/shopping-cart 1.svg'} alt="Carinho" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
