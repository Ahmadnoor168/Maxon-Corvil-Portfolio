import React, { useState, lazy, Suspense } from 'react'
import * as Icon from 'react-feather'
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom'
import './App.scss'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const BlogDetails = lazy(() => import('./pages/BlogDetails'))
const Blogs = lazy(() => import('./pages/Blogs'))
const Contact = lazy(() => import('./pages/Contact'))
const Notfound = lazy(() => import('./pages/Notfound'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Resumes = lazy(() => import('./pages/Resumes'))
const Skills = lazy(() => import('./pages/Skills'))

function App() {
  const [lightMode, setLightMode] = useState(false) // Made it true if you want to load your site light mode primary
  console.log(process.env.PUBLIC_URL)
  lightMode ? document.body.classList.add('light') : document.body.classList.remove('light')

  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true)
      document.body.classList.add('light')
    } else {
      setLightMode(false)
      document.body.classList.remove('light')
    }
  }

  return (
    <Suspense fallback={<p>Loading....</p>}>
      <HashRouter>
        {/*
            <div className="light-mode">
        <span className="icon">
          <Icon.Sun />
        </span>
        <button
          className={
            lightMode ? "light-mode-switch active" : "light-mode-switch"
          }
          onClick={() => handleMode()}
        ></button>
      </div>
      */}

        <Routes>
          <Route path={`/`} index element={<Home lightMode={lightMode} />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resumes />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id/:title" element={<BlogDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Skills />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </HashRouter>
    </Suspense>
  )
}

export default App
