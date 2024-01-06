import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from "./components/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Navigation/>

   
    </>
  )
}

export default App
