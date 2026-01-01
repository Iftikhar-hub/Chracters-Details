import { Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import Character from "./components/character"
import CharacterDetails from "./components/characterDetails"

import { BrowserRouter } from "react-router-dom"


function App() {
  return (   
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/characters" element={<Character />} />
         <Route path="/CharacterDetails" element={<CharacterDetails />} />
      </Routes>  
      
     </BrowserRouter>
  )
}

export default App
