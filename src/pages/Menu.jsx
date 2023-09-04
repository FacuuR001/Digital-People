import '../assets/css/Menu.css';
import Categoria from "../componentes/Categoria";
import { HiArrowUturnLeft } from 'react-icons/hi2';
import { useNavigate  } from 'react-router-dom';
import { obtenerPersonas, crearPersona, eliminarPersona } from "../api/api";
import { useEffect, useState } from 'react';


const Menu = () => {
    const [personas, setPersonas] = useState([]);
    const [nuevaPersona, setNuevaPersona] = useState({
        nombre: "",
        apellido: "",
        foto: "",
        dni: "",
        edadActual: "",
        fechaNacimiento: "",
        ciudadResidencia: "",
        direccionPostal: "",
        correoElectronico: "",
        telefono: "",
        viveFallecio: "",
        fechaFallecimiento: ""
    });


  /*  useEffect(() => {
        buscar(url, setPersonas)
    }, [url]);
 */
    //Obtener datos del servidor
    useEffect(() => {
        obtenerPersonas(setPersonas)
    }, [setPersonas]);

    //Crear una nueva persona
    const manejarNuevaPersona = async (formData) => {
        try {
          const nuevaPersonas = await crearPersona(formData);
          setPersonas([...personas, nuevaPersonas]);
          // Limpia el formulario o realiza otras acciones después de crear la persona
        } catch (error) {
          console.error('Error al crear la persona:', error);
        }
      };
      

    //Eliminar persona
    const manejarEliminarPersona = async (id) => {
        try {
          await eliminarPersona(id);
          setPersonas(personas.filter((persona) => persona.id !== id));
        } catch (error) {
          alert('Error al eliminar la persona');
        }
      };

    //Redirigir al incio
    const history = useNavigate();
    const salir = () => {
        history('/');
    }

    return (
        <div className='background' style={{ backgroundImage: "url(/img/Inicio.jpg)" }}>
            <header className='header-menu'>
                <div className='salir' onClick={() => salir()}>
                    <HiArrowUturnLeft className='icon-salir'/>
                </div>
            </header>
            <main className="menu"> 
                <h1 className="titulo__menu">Menú Principal</h1>
                <Categoria contenido='alta' manejarNuevaPersona={manejarNuevaPersona} />
                <Categoria contenido='baja' personas={personas} manejarEliminarPersona={manejarEliminarPersona} />
                <Categoria contenido='lista' personas={personas} />
            </main>
        </div>
    );
}

export default Menu;

