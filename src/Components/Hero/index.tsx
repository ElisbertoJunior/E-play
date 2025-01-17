import { Banner, Infos } from './styles'
import Tag from '../Tag'
import Button from '../Button'

import { priceFormat } from '../../utils'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {priceFormat(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por apenas {priceFormat(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              onClick={addCart}
              title={'clique aqui'}
              type={'button'}
              variant="primary"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
