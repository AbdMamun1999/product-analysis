import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Reviews from './component/Reviews/Reviews';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/reviews' element={<Reviews></Reviews>}></Route>
     </Routes>

    </div>
  );
}

export default App;
