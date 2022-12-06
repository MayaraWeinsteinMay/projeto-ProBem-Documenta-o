import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Sobre from './paginas/sobre nós/Sobre';
import Contato from './paginas/contato/Contato';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
      <Router>
        <Navbar />
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/login' element={<Login />}/>
              <Route path='/home' element={<Home />}/>
              <Route path='/sobre' element={<Sobre />}/>
              <Route path='/contato' element={<Contato />}/>
              <Route path='/cadastrousuario' element={<CadastroUsuario />}/>
          </Routes>
        <Footer /> 
      </Router>
  );
}

export default App;