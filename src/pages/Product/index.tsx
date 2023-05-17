import { useParams } from 'react-router-dom'
import Hero from '../../Components/Hero'

const Product = () => {
  const teste = useParams()

  return (
    <div>
      <Hero />
    </div>
  )
}

export default Product
