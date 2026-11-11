import './App.css'
import Tarefas2 from './components/Tarefas2'


function App() {

  const tarefas = ['estudar React', 'praticar JavaScript', 'revisar CSS']

  return (
    <div className="App">
      <Tarefas2 tarefas={tarefas} />
    </div>
  )
}

export default App
