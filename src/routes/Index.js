import React from 'react'
import { Route, Routes } from 'react-router'
import AddTodo from '../component/AddTodo'
const Index = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AddTodo />} />
        </Routes>
    </div>
  )
}

export default Index