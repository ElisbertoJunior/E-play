import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import GlobalStyle from './styles'
import Rotas from './routes'
import Footer from './Components/Footer'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
