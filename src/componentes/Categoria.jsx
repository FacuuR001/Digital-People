import '../assets/css/componets/Categoria.css';
import React, { useState } from 'react';
import FormularioDeAlta from './FormularioDeAlta';
import ListaDePersonas from './ListaDePersonas';
import BajaPersona from './BajaPersona';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const Categoria = ({ contenido }) => {
    const [swap, setSwap] = useState(false);

    const toggleOpen = () => {
        setSwap(!swap);
    };

    let componente;

    switch (contenido) {
        case 'alta':
            componente = <FormularioDeAlta />;
            break;
        case 'baja':
            componente = <BajaPersona />;
            break;
        case 'lista':
            componente = <ListaDePersonas />;
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

