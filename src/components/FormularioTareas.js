import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';

const FormularioTareas = ({tareas, setTareas}) => {

    const [inputTarea, setInputTarea] = useState('')

    const handleInput = (event) => {
        setInputTarea(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        if(inputTarea === "" || inputTarea === null){
            return
        } else {
            setTareas(
                [
                    ...tareas, 
                    {
                        id: uuidv4(),
                        texto: inputTarea,
                        completada: false
                    },
                ])
            setInputTarea('')
        }
    }

    return ( 
        <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="formulario-tareas__input"
                placeholder="Escribe una tarea"
                value={inputTarea}
                onChange={(event) => handleInput(event)}
            />
            <button 
                type="submit"
                className="formulario-tareas__btn"
            >
                <FontAwesomeIcon 
                    icon={faPlusSquare} 
                    className="formulario-tareas__icono-btn"
                />

            </button>
        </form>
     );
}
 
export default FormularioTareas;