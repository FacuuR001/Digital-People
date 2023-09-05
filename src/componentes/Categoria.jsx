import '../assets/css/componets/Categoria.css';
import React, { useState } from 'react';
import FormularioDeAlta from './FormularioDeAlta';
import ListaDePersonas from './ListaDePersonas';
import BajaPersona from './BajaPersona';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const Categoria = ({ contenido, personas, manejarEliminarPersona, handleSubmit, handleChange, nuevaPersona }) => {
    const [swap, setSwap] = useState(false);


    const toggleOpen = () => {
        setSwap(!swap);
    };

    let componente;

    switch (contenido) {
        case 'alta':
            componente = <FormularioDeAlta handleChange={handleChange} handleSubmit={handleSubmit} nuevaPersona={nuevaPersona} />;
            break;
        case 'baja':
            componente = <BajaPersona personas={personas} manejarEliminarPersona={manejarEliminarPersona}/>;
            break;
        case 'lista':
            componente = <ListaDePersonas personas={personas}/>;
            break;
        default:
            componente = null;
    }

    return (
        <section className='categoria '>
                <div>
                    <div className='opcion'>
                        <h3>{contenido === 'alta' ? 'Alta Persona' : contenido === 'baja' ? 'Baja Persona' : 'Lista de Personas'}</h3>
                        <div onClick={toggleOpen}>
                                {swap ? <AiOutlineUp className='icon-down' /> : <AiOutlineDown className='icon-down' />}
                        </div>
                    </div>
                    <div>
                        {swap ? componente : null}
                    </div>
                </div>
        </section>
    );
};

export default Categoria;

