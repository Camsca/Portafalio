
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';


function App() {
 

  return (
    <>
    <Header/>
  
  <main >
        <Outlet />
      </main>
<Footer/>
    </>
  )
}

export default App
