import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav'
import Header from './components/Header';
import Men from './components/Men/Men'
import Women from './components/Women/Women';
import Kids from './components/Kids/Kids'
import MenPageDetails from './components/Men/MenPageDetails';




function App() {

  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path="men/:id" element={<MenPageDetails/>}/> 
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
      </Routes>
    </div>
  );
}

export default App;
