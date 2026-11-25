import Salutation from './components/header.jsx';
import Produits from './pages/Produits.jsx';
import Apropos from './pages/APropos.jsx'
import { useState,useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Contact from './pages/Contact.jsx'; 
import Accueil from './pages/Accueill.jsx';
function App(){
  const [theme, setTheme] = useState("light");
  
  //effect du changement de theme du site web
  useEffect (() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme(){
    return(
    setTheme(theme === "light" ? "dark" : "light")
    );
  }
  return(
    <>
    {/*entête du site web*/}
    <Salutation nom="MAGIC COSMET" theme={theme} onToggleTheme={toggleTheme}/>

    {/*les différents chemins de chaque lien de la navbar*/}
    <Routes>
      <Route path='/' element={<Accueil/>}/>
      <Route path='/produits' element={<Produits/>}/>
      <Route path='/Apropos' element={<Apropos/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </>

  );
}


export default App;
