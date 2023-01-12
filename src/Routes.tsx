import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./Login"

export default () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    </Router>
)