import Perfil from './components/Perfil'
import './App.css'
import Tarefas from './components/Tarefas'
import Form from './components/Form'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <Perfil nome="Ana" idade="22" profissao="Designer" />
      <Tarefas nome="Comprar mantimentos" />
      <Form />
      <Button />
    </div>
  )
}

export default App
