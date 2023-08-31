import '../assets/css/Menu.css';
import Categoria from "../componentes/Categoria";
import { HiArrowUturnLeft } from 'react-icons/hi2';
import { useNavigate  } from 'react-router-dom';
import { buscar } from "../api/api";
import { useEffect, useState } from 'react';


const Menu = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        buscar(url, setCategorias)
    }, [url]);

    const history = useNavigate();
    const salir = () => {
        console.log("hola");
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
                <Categoria contenido='alta' />
                <Categoria contenido='baja' />
                <Categoria contenido='lista' />
            </main>
        </div>
    );
}

export default Menu;