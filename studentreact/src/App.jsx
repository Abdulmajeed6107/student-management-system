import { useState } from 'react'
import './App.css'
import StudentNav from './components/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import HomePage from './pages/homepage'
import AddstudentPage from './pages/addstudentPage'
import UpdateStudentPage from './pages/updatastudentpage'

function App() {

  return (
    <BrowserRouter>
      <StudentNav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add' element={<AddstudentPage />} />
        <Route path='/update/:id' element={<UpdateStudentPage />} />
      </Routes>
    </BrowserRouter>
  )

}
export default App
