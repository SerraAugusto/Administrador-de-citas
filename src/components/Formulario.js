import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {

    
    //Crear State de Citas

    const [cita, actualizarCita] = useState ({

        mascota: '',
        propietario: '',
        fecha:'',
        hora: '',
        sintomas: '',
        


    })
    const [error, actualizarError] = useState(false)
    //Funcion que se ejectua cada vez que el usario escribe en un imput

    const actualizarState = e  => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
        
    }

    //Extraer los valores

    const {mascota, propietario, fecha, hora, sintomas} = cita
   
   //Cuando el usuario presiona agregar cita
   
   const submitCita = e => {
       e.preventDefault();

       
       
       //Validar
       if(mascota.trim()=== '' || propietario.trim()=== '' || fecha.trim()=== '' ||  hora.trim()=== ''  
       || sintomas.trim()=== ''){
           actualizarError(true)
           return;
       }
//eliminar el mensaje previo
       actualizarError(false);
       
       //Asignar un ID
       cita.id = uuidv4();
       console.log(cita)
       //Crear la cita
crearCita(cita)
       //Reiniciar el form
       actualizarCita({
        mascota: ' ',
        propietario: ' ',
        fecha:' ',
        hora: ' ',
        sintomas: ' ',
       })


   }
   
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
           
           {error ? <p className="alerta-error">Todos los campos son obligatorio </p>  :null}
           
            <form


                onSubmit={submitCita}
            >
            
            <label>Nombre Mascota</label>
            <input
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre Mascota"
            onChange={actualizarState}
            value={mascota}

            />
             
             
              <label>Nombre Dueño</label>
            <input
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Dueño de la mascota"
            onChange={actualizarState}
            value={propietario}
            />
            
            
            <label>Fecha</label>
            <input
            type="date"
            name="fecha"
            className="u-full-width"
            onChange={actualizarState}
            value={fecha}
        
            />

<label>hora</label>
            <input
            type="time"
            name="hora"
            className="u-full-width"
            onChange={actualizarState}
            value={hora}
            />

<label>Sintomas</label>
            <textarea
            type="text"
            name="sintomas"
            className="u-full-width"
            onChange={actualizarState}
            value={sintomas}
            ></textarea>
            <button
            type="sumbit"
            className="u-fulwidth button-primary"
                >Agregar Cita</button>
            
            </form>
        </Fragment>
     );
}
 Formulario.propTypes = {
     crearCita: PropTypes.func.isRequired
 }
export default Formulario;