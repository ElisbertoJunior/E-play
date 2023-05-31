import Button from '../Button'
import Tag from '../Tag'

import { priceFormat } from '../../utils'
import { useGetFeaturedGameQuery } from '../../services/api'

import { Image, Prices, Title } from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) return <h3>carregando...</h3>

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{priceFormat(game.prices.old)}</span> <br />
            por apenas {priceFormat(game.prices.current)}
          </Prices>
        </div>
        <Button type="link" to={`/product/${game.id}`} title="Clique aqui">
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
