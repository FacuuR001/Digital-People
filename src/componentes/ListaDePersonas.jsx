import '../assets/css/componets/ListaDePersonas.css'


const ListaDePersonas = ({ personas }) => {
    return (
        <section className="opcion-swap">
            {
                personas.map( persona => {
                    const { Foto, Nombre, Apellido, FechaNacimiento, DNI, EdadActual, CiudadResidencia, DireccionPostal, CorreoElectronico, Telefono, ViveFallecio , FechaFallecimiento, id} = persona;

                    return (
                        <div className='lista-personas' key={ id }>
                            <img className='lista-img-persona' src={ Foto } alt={ id } />
                            <div className='lista-datos'>
                                <p><strong className='dato'>Nombre:</strong> { Nombre }</p>
                                <p><strong className='dato'>Apellido:</strong> { Apellido }</p>
                                <p><strong className='dato'>DNI:</strong> { DNI }</p>
                                <p><strong className='dato'>Fecha de Nacimiento:</strong> { FechaNacimiento }</p>
                                <p><strong className='dato'>Edad Actual:</strong> { EdadActual }</p>
                                <p><strong className='dato'>Ciudad de Residencia:</strong> { CiudadResidencia }</p>
                                <p><strong className='dato'>Dirección Postal:</strong> { DireccionPostal }</p>
                                <p><strong className='dato'>E-mail:</strong> { CorreoElectronico }</p>
                                <p><strong className='dato'>Telefono:</strong> { Telefono }</p>
                                <p><strong className='dato'>Vive / Falleció:</strong> { ViveFallecio }</p>
                                <p><strong className='dato'>Fecha de Fallecimiento:</strong> { FechaFallecimiento }</p>
                            </div>
                        </div>
                    );
                })
            }
        </section>
    );
}

export default ListaDePersonas;

