import '../assets/css/Error404.css';

const Error404 = () => {
    return (
        <main className='main' style={{ backgroundImage: "url(/img/Inicio.jpg)" }}>
            <h1 className='titulo-404' >404</h1>
            <p className='texto-404' >Esta página no existe!</p>
        </main>
    );
}

export default Error404;