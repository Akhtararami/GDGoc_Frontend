import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Contact from './pages/Contact'
import Overview from './pages/Overview'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
