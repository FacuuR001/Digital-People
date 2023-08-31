import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/css/base/base.css'
import Inicio from './pages/Inicio';
import Error404 from './pages/Error404';
import Menu from './pages/Menu';


function App() {


  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
