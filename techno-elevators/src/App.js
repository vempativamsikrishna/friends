import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navber from './Components/Header/Navbar'
import Hompage from './Components/Homepages/Hompage';
import { createContext } from 'react';
import axios from 'axios';
export const store = createContext()
function App() {
const[menus,setMenus]=useState();
useEffect(()=>{
  axios.get(' http://localhost:3001/items')
  .then(response => setMenus(response.data))
})


  return (
    <>
    <store.Provider value={[menus,setMenus]}>
    <BrowserRouter>
    <Navber/>
  
    <Routes>
      <Route  path="/"  element={<Hompage/>}/>

    </Routes>
    </BrowserRouter>
    </store.Provider>
    </>
     
  );
}

export default App;
