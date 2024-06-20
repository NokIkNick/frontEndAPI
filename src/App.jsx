import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "./page/Home"
import {Layout} from "./layout/Layout"
import { PageNotFound } from "./page/PageNotFound"



function App() {


  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
