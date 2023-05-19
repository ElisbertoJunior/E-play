import Button from '../Button'
import Tag from '../Tag'
import { Image, Prices, Title } from './styles'
import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home'
import { priceFormat } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

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
