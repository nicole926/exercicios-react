import Perfil from './components/Perfil'
import './App.css'

function App() {
  return (
    <div className="App">
      <Perfil nome="Ana" idade="22" profissao="Designer" />
      <Perfil nome="Lucas" idade="25" profissao="Desenvolvedor" />
      <Perfil nome="Mariana" idade="30" profissao="Gerente" />
    </div>
  )
}

export default App
