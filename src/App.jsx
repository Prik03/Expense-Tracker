import { useState } from 'react'
import './App.css'
import UserData from './components/UserData'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserData/>
    )
}

export default App
