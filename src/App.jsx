import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Page1 from './Page1'
import Page2 from './Page2'
import Marksheet from './components/Marksheet'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const initialState = {
    sid: "", 
    sname: "",
    rollno: "",
    course: "",
    sem: ""
  };

  const [studDetails, setStudDetails] = useState(initialState)

  const [subs, setSubs] = useState([]);


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" 
        element={<Page1 studDetails={studDetails} 
                        setStudDetails={setStudDetails} />
                  }
        />
        <Route path="/add-subs" 
        element={<Page2 studDetails={studDetails} setStudDetails={setStudDetails} subs={subs} setSubs={setSubs} />}
        />

        <Route path="/marks-details" 
        element={<Marksheet studDetails={studDetails} subs={subs} />}
        />

      
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
