import { Banner, Infos } from './styles'
import bannerImg from '../../images/fundohogwarts.png'
import Tag from '../Tag'
import Button from '../Button'

const Hero = () => {
  return (
    <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$ 250,00</span>
            Por R$ 190,00
          </p>
          <Button title={'clique aqui'} type={'button'} variant="primary">
            Adicionar ao carrinho
          </Button>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
