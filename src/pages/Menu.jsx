import '../assets/css/Menu.css';
import Categoria from "../componentes/Categoria";
import { HiArrowUturnLeft } from 'react-icons/hi2';
import { useNavigate  } from 'react-router-dom';
import { obtenerPersonas, eliminarPersona, crearPersona } from "../api/api";
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';



const Menu = () => {
    const [personas, setPersonas] = useState([]);
    const [nuevaPersona, setNuevaPersona] = useState({
        id: uuid(),
        Nombre: "",
        Apellido: "",
        Foto: "",
        DNI: "",
        EdadActual: "",
        FechaNacimiento: "",
        CiudadResidencia: "",
        DireccionPostal: "",
        CorreoElectronico: "",
        Telefono: "",
        ViveFallecio: "",
        FechaFallecimiento: ""
    });


  /*  useEffect(() => {
        buscar(url, setPersonas)
    }, [url]);
 */
    //Obtener datos del servidor
    useEffect(() => {
        obtenerPersonas(setPersonas)
    }, []);

    //Crear una nueva persona
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Llama a la función de la API para crear una nueva persona
            const nuevaPersonaCreada = await crearPersona(nuevaPersona);
    
            // Actualiza el estado de personas con la nueva persona creada por la API
            setPersonas([...personas, nuevaPersonaCreada]);
    
            // Limpia el formulario
            setNuevaPersona({
                id: uuid(),
                Nombre: "",
                Apellido: "",
                Foto: "",
                DNI: "",
                EdadActual: "",
                FechaNacimiento: "",
                CiudadResidencia: "",
                DireccionPostal: "",
                CorreoElectronico: "",
                Telefono: "",
                ViveFallecio: "",
                FechaFallecimiento: ""
            });
        } catch (error) {
            alert('Error al crear la persona');
        }
    };
    
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevaPersona({ ...nuevaPersona, [name]: value });
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
                <Categoria contenido='alta' handleSubmit={handleSubmit} handleChange={handleChange} nuevaPersona={nuevaPersona} />
                <Categoria contenido='baja' personas={personas} manejarEliminarPersona={manejarEliminarPersona} />
                <Categoria contenido='lista' personas={personas} />
            </main>
        </div>
    );
}

export default Menu;

