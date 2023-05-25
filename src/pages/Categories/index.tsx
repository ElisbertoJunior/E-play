import ProductsList from '../../Components/ProductsList'

import {
  useGetGamesActionQuery,
  useGetGamesSportsQuery,
  useGetGamesSimulationQuery,
  useGetGamesFightQuery,
  useGetGamesRPGQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAction } = useGetGamesActionQuery()
  const { data: gamesSports } = useGetGamesSportsQuery()
  const { data: gamesSimulation } = useGetGamesSimulationQuery()
  const { data: gamesFight } = useGetGamesFightQuery()
  const { data: gamesRPG } = useGetGamesRPGQuery()

  if (gamesAction && gamesSports && gamesSimulation && gamesFight && gamesRPG) {
    return (
      <>
        <ProductsList
          games={gamesAction}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={gamesSports}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={gamesSimulation}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductsList
          games={gamesFight}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductsList
          games={gamesRPG}
          title="RPG"
          background="black"
          id="rpg"
        />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Categories
