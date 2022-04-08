import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Reviews from './Components/Reviews/Reviews'
import Dashboard from './Components/Dashboard/Dashboard'
import Blogs from './Components/Blogs/Blogs'
import About from './Components/About/About'
import NotFound from './Components/Not Found/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='Home' element={<Home></Home>}></Route>
        <Route path='Reviews' element={<Reviews></Reviews>}></Route>
        <Route path='Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='About' element={<About></About>}></Route>,
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
