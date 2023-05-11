import { Image, Prices, Title } from './styles'
const Banner = () => {
  return (
    <Image style={{ backgroundImage: 'url("images/banner-homem-aranha.png")' }}>
      <div className="container">
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
        <Prices>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Prices>
      </div>
    </Image>
  )
}

export default Banner
