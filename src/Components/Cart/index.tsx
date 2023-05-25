import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import Tag from '../Tag'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  SideBar
} from './styles'
import { priceFormat } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => dispatch(close())

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const geTotalPrice = () => {
    return items.reduce((acc, totalValue) => {
      return (acc += totalValue.prices.current!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
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
          total de {priceFormat(geTotalPrice())}{' '}
          <span>Em ate 6x sem juros</span>
        </Prices>
        <Button type={'button'} title={'Clique aqui'}>
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
