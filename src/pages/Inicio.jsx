import "../assets/css/Inicio.css";
import { Link } from "react-router-dom";

const Inicio = () => {
    return (
            <main className="main" style={{ backgroundImage: "url(/img/Inicio.jpg)" }}>
            <h1 className="main__titulo">Digital People</h1>
            <Link 
                to={'/menu'}
                className="main__btn">
                    <span>Iniciar!</span>
                    <i></i>
            </Link>
        </main>
    );
}

export default Inicio;