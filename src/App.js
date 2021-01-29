import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas'
import ListaTareas from './components/ListaTareas';


const App = () => {

  //! LocalStorage
  const tareasGuardadas = localStorage.getItem('tareas') ? 
                          localStorage.getItem('tareas') :
                          []
  let mostrarCompletadasGuardadas = ''
  if(localStorage.getItem('mostrarCompletadas') === null){
    mostrarCompletadasGuardadas = true
  } else {
    mostrarCompletadasGuardadas = localStorage.getItem('mostrarCompletadas') === 'true'
  }



  //! Hooks - useStates
  const [tareas, setTareas] = useState(JSON.parse(tareasGuardadas))
  const [mostrarCompletadas, setMostrarCompletadas] = useState(mostrarCompletadasGuardadas)


  //! Hooks - useEffects
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString())
  }, [mostrarCompletadas])


  //! Return
  return (
   <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas} setMostrarCompletadas={setMostrarCompletadas}/>
      <FormularioTareas tareas={tareas} setTareas={setTareas}/>
      <ListaTareas 
        tareas={tareas} 
        setTareas={setTareas}
        mostrarCompletadas={mostrarCompletadas}/>
   </div>
  );
}

export default App;
