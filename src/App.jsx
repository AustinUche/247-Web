import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import Home from './components/Home'

function App() {
    return (
        <div className="">
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App
