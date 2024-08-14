import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Test from './test/Test'
import Home from './home/Home'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/test' element={<Test />}/>
            </Routes>
        </Router>
    );
}