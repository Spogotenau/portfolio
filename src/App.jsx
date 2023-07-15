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
          <Route path='projekte' element={<Projekte />} />
          <Route path='projekte/weatherGuru' element={<WeatherGuru />} />
          <Route path='projekte/cooLet' element={<CooLet />} />
          <Route path='projekte/passwordGolem' element={<PasswordGolem />} />
          <Route path='projekte/meinErstesBackend' element={<ShoeBackend />} />
          <Route path='projekte/quizGame' element={<QuizGame />} />
          <Route
            path='projekte/schereSteinPapier'
            element={<RockPaperScissors />}
          />
          <Route path='projekte/todoListe' element={<TodoList />} />
          <Route path='projekte/randomFact' element={<RandomFact />} />
          <Route path='projekte/portfolio' element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
