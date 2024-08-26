import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Test from './test/Test'
import Home from './home/Home'
import CompatibilityTest from './compatibility-test/CompatibilityTest'
import Results from './results/Results'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/compatibility-test" element={<CompatibilityTest />} />
                <Route path='/test' element={<Test />}/>
                <Route path='/results' element={<Results />} />
            </Routes>
        </Router>
    );
}