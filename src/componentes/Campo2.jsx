import React, { useState } from 'react';
import '../assets/css/componets/Campo.css';

const Campo2 = (props) => {
    const { value, onChange, name  } = props;

    const opciones = ['Vive', 'Fallecio'];
    const opcionPredeterminada = '--Vive/Fallecio--'; 

    return (
        <div>
            <select 
                className='form-campo' 
                value={value} 
                name={name} 
                onChange={e => onChange(e)}> 
                <option defaultValue={opcionPredeterminada}>{opcionPredeterminada}</option>
                    {opciones.map((opcion, index) => (
                    <option key={index} value={opcion}>
                     {opcion}
                    </option>
        ))}
            </select>
        </div>
    );
}


  

  



export default Campo2;