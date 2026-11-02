import Perfil from './components/Perfil'
import './App.css'
import Tarefas from './components/Tarefas'

function App() {
  return (
    <div className="App">
      <Perfil nome="Ana" idade="22" profissao="Designer" />
      <Perfil nome="Lucas" idade="25" profissao="Desenvolvedor" />
      <Perfil nome="Mariana" idade="30" profissao="Gerente" />
      <Tarefas nome="Comprar mantimentos" />
      <Tarefas nome="Fazer exercícios" />
      <Tarefas nome="Ler um livro" />
    </div>
  )
}

export default App
