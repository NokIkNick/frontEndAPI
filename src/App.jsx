import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "./page/Home"
import {Layout} from "./layout/Layout"
import { PageNotFound } from "./page/PageNotFound"
import { About } from "./page/About"
import { Skills } from "./page/Skills"
import { Education } from "./page/Education"
import { Projects } from "./page/Projects"
import { Experience } from "./page/Experience"
import { Contact } from "./page/Contact"



function App() {


  return (
    <>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
