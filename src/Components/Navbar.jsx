import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, toggleTheme} = useContextGlobal()

  return (
    <nav className={state.theme}>
      <Link to="/"><h4>Home</h4></Link>
      <Link to="/Favs"><h4>Favoritos</h4></Link>
      <Link to="/Contact"><h4>Contacto</h4></Link>
      <button onClick={toggleTheme}>🌗</button>
    </nav>
  )
}

export default Navbar