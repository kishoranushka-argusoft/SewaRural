import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import ConversationCollection from './pages/conversationcollection'
import ConversationDashboard from './pages/conversationdashboard'
import Summary from './pages/summary'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/conversation" element={<ConversationCollection />} />
        <Route path="/conversationdashboard" element={<ConversationDashboard />} />
        <Route path="/summary" element={<Summary/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App