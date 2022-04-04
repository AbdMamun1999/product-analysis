import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chart from './component/Chart/Chart';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import PageNotFound from './component/PageNotFound/PageNotFound';
import Reviews from './component/Reviews/Reviews';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/reviews' element={<Reviews></Reviews>}></Route>
       <Route path='/dashboard' element={<Chart/>}></Route>
       <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
     </Routes>

    </div>
  );
}

export default App;
