import ProductsList from '../../Components/ProductsList'

import {
  useGetGamesActionQuery,
  useGetGamesSportsQuery,
  useGetGamesSimulationQuery,
  useGetGamesFightQuery,
  useGetGamesRPGQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAction, isLoading: loadingActionGames } =
    useGetGamesActionQuery()
  const { data: gamesSports, isLoading: loadingSportsGames } =
    useGetGamesSportsQuery()
  const { data: gamesSimulation, isLoading: loadingSimulationGames } =
    useGetGamesSimulationQuery()
  const { data: gamesFight, isLoading: loadingFightGames } =
    useGetGamesFightQuery()
  const { data: gamesRPG, isLoading: loadingRPGGames } = useGetGamesRPGQuery()

  return (
    <>
      <ProductsList
        games={gamesAction}
        title="Ação"
        background="black"
        id="action"
        isLoading={loadingActionGames}
      />
      <ProductsList
        games={gamesSports}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={loadingSportsGames}
      />
      <ProductsList
        games={gamesSimulation}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={loadingSimulationGames}
      />
      <ProductsList
        games={gamesFight}
        title="Luta"
        background="gray"
        id="fight"
        isLoading={loadingFightGames}
      />
      <ProductsList
        games={gamesRPG}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={loadingRPGGames}
      />
    </>
  )
}

export default Categories
