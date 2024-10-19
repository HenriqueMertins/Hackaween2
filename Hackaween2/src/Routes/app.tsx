import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Containers/Body';  
import Login from '../Containers/Login';  
import Register from '../Containers/Register';
import Biography from '../Containers/Biography';
import Anexo from '../Containers/Anuncio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/biography" element={<Biography />} /> 
        <Route path="/anexo" element={<Anexo />} /> 
      </Routes>
    </Router>
  );
}

export default App;
