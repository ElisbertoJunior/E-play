import Banner from '../../Components/Banner'
import ProductsList from '../../Components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSaleGames } =
    useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoonGames } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSaleGames}
      />
      <ProductsList
        games={soonGames}
        title="Em breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoonGames}
      />
    </>
  )
}

export default Home
