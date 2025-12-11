
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Header from './components/Header'

import AboutPage from './Pages/AboutPg'
import Footer from './components/Footer'
import HomePage from './Pages/HomePage';
import DM from './Pages/DigitalMarketting';
import Web_dev from './Pages/Web-devPg'
import ProductionHouse from './Pages/ProductionHouse';
import PodcastStudio from './Pages/PodcastStudio';
import Reviews from './Pages/Reviews';
import Projects from './Pages/Projects';


function App() {
 

  return (
    <>
    <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/about' element={<AboutPage/>}/>
    <Route path= '/digital_marketing' element = {<DM/>} />
    <Route path= '/web_development' element = {<Web_dev/>} />
    <Route path='/production_house' element={<ProductionHouse/>}/>
    <Route path='/podcast_studio' element={<PodcastStudio/>} />
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/reviews' element={<Reviews/>}/>
  </Routes>

  <Footer/>

  </BrowserRouter>

</>

  )
}

export default App
