import './App.css'
import Header from './componentes/Header'
import Bio from './componentes/Bio'
import Footer from './componentes/Footer'
import Cards from './componentes/Cards'

function App() {
  return (
    <div className="div_do_app">
      <Header content="Meus conteudos favoritos"/>
      <Bio />
      <Cards/>
      <Footer content="Feito com ♡ por Laylla. E todos os direitos são reservados." />
    </div>
  )
}

export default App
