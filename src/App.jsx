import './App.css'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CounterPage from './pages/CounterPage';
import FetchPage from './pages/FetchPage';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/fetch" element={<FetchPage />} />
    </Routes>
    </>
  )
}

export default App
