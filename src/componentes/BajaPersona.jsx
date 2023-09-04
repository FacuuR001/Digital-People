import { FaXmark } from 'react-icons/fa6'
import '../assets/css/componets/BajaPersona.css'

const BajaPersona = (props) => {
    const { personas, manejarEliminarPersona } = props;


    return (
        <section className="opcion-swap">
            {
                personas.map( persona => {
                    const { Foto, Nombre, id } = persona;
                    return <div className='persona' key={id}>
                                <img className='persona-img' src={Foto} alt={id} />
                                <h4 className='persona-baja-nombre'>{Nombre}</h4>
                                <FaXmark className='eliminar-persona' onClick={() => manejarEliminarPersona(id)} />
                            </div>
                })
            }
        </section>
    );
}

export default BajaPersona;

