import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/index'
import Header from './Components/Header/index'
import Navbar from './Pages/Home/Navbar'
import Menu from './Pages/Home/Menu'
import Offers from './Pages/Home/Offers'
import Restaurants from './Pages/Home/Restaurants'
import Track from './Pages/Home/Track'
import Footer from './Components/Footer/index'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='menu' element={<Menu />}/>
      <Route path='offer' element={<Offers/>}/>
      <Route path='restaurant' element={<Restaurants/>}/>
      <Route path='trackorder' element={<Track/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
