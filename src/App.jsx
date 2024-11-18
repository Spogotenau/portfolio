// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Pages/Layout'
import Startseite from './Pages/Startseite'
import AboutMe from './Pages/AboutMe'
import Projekte from './Pages/Projekte'
import WeatherGuru from './Pages/WeatherGuru'
import CooLet from './Pages/CooLet'
import PasswordGolem from './Pages/PasswordGolem'
import ShoeBackend from './Pages/ShoeBackend'
import QuizGame from './Pages/QuizGame'
import RockPaperScissors from './Pages/RockPaperScissors'
import TodoList from './Pages/TodoList'
import RandomFact from './Pages/RandomFact'
import Portfolio from './Pages/PortfolioWebsite'
import Contact from './Pages/Contact'
import EcoMania from './Pages/EcoMania'
import LibraryAPI from './Pages/LibraryAPI'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Startseite />} />
          <Route path='überMich' element={<AboutMe />} />
          <Route path='projekte'>
            <Route index element={<Projekte />} />
            <Route path='libraryAPI' element={<LibraryAPI />} />
            <Route path='ecoMania' element={<EcoMania />} />
            <Route path='weatherGuru' element={<WeatherGuru />} />
            <Route path='cooLet' element={<CooLet />} />
            <Route path='passwordGolem' element={<PasswordGolem />} />
            <Route path='meinErstesBackend' element={<ShoeBackend />} />
            <Route path='quizGame' element={<QuizGame />} />
            <Route path='schereSteinPapier' element={<RockPaperScissors />} />
            <Route path='todoListe' element={<TodoList />} />
            <Route path='randomFact' element={<RandomFact />} />
            <Route path='portfolio' element={<Portfolio />} />
          </Route>
          <Route path='kontakt' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
