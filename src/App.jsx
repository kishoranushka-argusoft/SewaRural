import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import ConversationCollection from "./pages/conversationcollection";
import ConversationDashboard from "./pages/conversationdashboard";
import Summary from "./pages/summary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./routes/protectedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/conversation"
          element={
            <ProtectedRoute>
              <ConversationCollection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/conversationdashboard"
          element={
            <ProtectedRoute>
              <ConversationDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/summary/:id"
          element={
            <ProtectedRoute>
              <Summary />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
};

export default App;
