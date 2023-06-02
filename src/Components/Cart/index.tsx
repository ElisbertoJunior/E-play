import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { getTotalPrice, priceFormat } from '../../utils'

import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  SideBar
} from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => dispatch(close())

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.media.thumbnail} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{priceFormat(item.prices.current)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </CartItem>
              ))}
            </ul>
            <Quantity>{items.length} jogo(s) no carrinho</Quantity>
            <Prices>
              total de {priceFormat(getTotalPrice(items))}{' '}
              <span>Em ate 6x sem juros</span>
            </Prices>
            <Button
              onClick={goToCheckout}
              type={'button'}
              title={'Clique aqui'}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carinho esta vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
