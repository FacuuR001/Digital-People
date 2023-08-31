import '../assets/css/componets/ListaDePersonas.css'


const ListaDePersonas = () => {
    return (
        <section className="opcion-swap">
            <div className='lista-personas'>
                    <img className='lista-img-persona' src="https://github.com/FacuuR001.png" alt="persona" />
                    <div className='lista-datos'>
                        <p><strong className='dato'>Nombre:</strong> Facundo</p>
                        <p><strong className='dato'>Apellido:</strong> Rullo</p>
                        <p><strong className='dato'>Fecha de Nacimiento:</strong> 08/06/2001</p>
                        <p><strong className='dato'>Edad Actual:</strong> 22</p>
                        <p><strong className='dato'>Ciudad de Residencia:</strong> Rio Cuarto</p>
                        <p><strong className='dato'>Dirección Postal:</strong> 5800</p>
                        <p><strong className='dato'>E-mail:</strong> facundorullo132@gmail.com</p>
                        <p><strong className='dato'>Telefono:</strong> +54 351 545 3894</p>
                        <p><strong className='dato'>Vive / Falleció:</strong> Si</p>
                        <p><strong className='dato'>Fecha de Fallecimiento:</strong> -</p>
                    </div>
            </div>
            <div className='lista-personas'>
                    <img className='lista-img-persona' src="https://github.com/FacuuR001.png" alt="persona" />
                    <div className='lista-datos'>
                        <p><strong className='dato'>Nombre:</strong> Facundo</p>
                        <p><strong className='dato'>Apellido:</strong> Rullo</p>
                        <p><strong className='dato'>Fecha de Nacimiento:</strong> 08/06/2001</p>
                        <p><strong className='dato'>Edad Actual:</strong> 22</p>
                        <p><strong className='dato'>Ciudad de Residencia:</strong> Rio Cuarto</p>
                        <p><strong className='dato'>Dirección Postal:</strong> 5800</p>
                        <p><strong className='dato'>E-mail:</strong> facundorullo132@gmail.com</p>
                        <p><strong className='dato'>Telefono:</strong> +54 351 545 3894</p>
                        <p><strong className='dato'>Vive / Falleció:</strong> No</p>
                        <p><strong className='dato'>Fecha de Fallecimiento:</strong> 08/10/2147</p>
                    </div>
            </div>
        </section>
    );
}

export default ListaDePersonas;