import './styles/global.css'
import './App.css'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'

function App() {
  return (
    <div className="app">
      <h1>🐱 고양이 댄싱 페이지 🐱</h1>
      <DancingCat />
      <AnimationControls />
    </div>
  )
}

export default App
