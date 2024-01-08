import './App.css'
import { Outlet } from 'react-router-dom';
import Navigation from './components/UI/Navbar/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/UI/Header/Header';


function App() {
 

  return (
    <>
    <Header/>
  <Navigation/>
  <main >
        <Outlet />
      </main>
    </>
  )
}

export default App
