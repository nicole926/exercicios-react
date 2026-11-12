import './App.css'
import { useState } from 'react'
import ControleTemperatura from './components/ControleTemperatura'
import MostrarTemperatura from './components/MostrarTemperatura'

function App() {
  const [temperatura, setTemperatura] = useState(0)
  return (
    <div className="App">
      <ControleTemperatura temperatura={temperatura} setTemperatura={setTemperatura} />
      <MostrarTemperatura temperatura={temperatura} />
    </div>
  )
}

export default App
