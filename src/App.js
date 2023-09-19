import './App.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  // console.log(db); //-> firebase 연동 확인용
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
