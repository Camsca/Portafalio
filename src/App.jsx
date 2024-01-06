import './App.css'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
 

  return (
    <>
  <Navigation/>
  <main >
        <Outlet />
      </main>
    </>
  )
}

export default App
