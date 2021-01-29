import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Header = ({ mostrarCompletadas, setMostrarCompletadas }) => {
    return ( 
        <header className="header">
            <h1 className="header__titulo">Lista de Tareas</h1>
            <button className="header__boton" onClick={() => setMostrarCompletadas(!mostrarCompletadas)}>
                { mostrarCompletadas ? "No mostrar completadas" : "Mostrar completadas"}
                <FontAwesomeIcon 
                    icon={mostrarCompletadas ? faEyeSlash : faEye} 
                    className="header__icono-boton"/>
            </button>
        </header>
     );
}
 
export default Header;