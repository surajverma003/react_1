import React from 'react'
import FormList from './components/FormList';
import Pagenotfound from './components/Pagenotfound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Form from './components/Form';
import ColorChange from './components/ColorChange';
import TextBox from './components/TextBox';


function App() {
  document.body.style.background = 'black'
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='formlist' element={<FormList />}></Route>
          <Route path='form' element={<Form />}></Route>
          <Route path='*' element={<Pagenotfound />}></Route>
          <Route path='color-change' element={<ColorChange />}></Route>
          <Route path='text-box' element={<TextBox />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
