import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './Navber/Navber'
import Linecharts from './Linecharts/Linecharts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navber></Navber>
      <Linecharts></Linecharts>
    </>
  )
}

export default App
