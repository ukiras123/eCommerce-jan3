import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<h1>This is new project... Coming soon</h1>}></Route>
      </Routes>

    </>
  )
}

export default App
