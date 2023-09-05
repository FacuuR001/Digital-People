import Campo from './Campo';
import '../assets/css/componets/FormularioDeAlta.css'
import Campo2 from './Campo2';

const FormularioDeAlta = ({ nuevaPersona, handleSubmit, handleChange }) => {
    
    return (
        <section className="opcion-swap">
            <form className='form__alta' onSubmit={handleSubmit}>
                <Campo
                    placeHolder="Nombre"
                    type="text"
                    name="Nombre"
                    required
                    value={nuevaPersona.Nombre}
                    onChange={handleChange}
                />
                <Campo
                    placeHolder="Apellido"
                    type="text"
                    name="Apellido"
                    required
                    value={nuevaPersona.Apellido}
                    onChange={handleChange}
                />
                <Campo
                    placeHolder="Foto (Url)"
                    type="search"
                    name="Foto"
                    required
                    value={nuevaPersona.Foto}
                    onChange={handleChange}
                />
                <Campo
                    placeHolder="DNI"
                    type="number"
                    name="DNI"
                    required
                    value={nuevaPersona.DNI}
                    onChange={handleChange}
                />
                <Campo
                    placeHolder="Fecha de Nacimiento"
                    type="text"
                    name="FechaNacimiento"
                    required
                    value={nuevaPersona.FechaNacimiento}
                    onChange={handleChange}
                />
                <Campo
                    placeHolder="Edad Actual"
                    type="number"
                    name="EdadActual"
                    required
                    value={nuevaPersona.EdadActual}
                    onChange={handleChange}
                />
                <Campo
                    placeHolder="Ciudad de Residencia"
                    type="text"
                    name="CiudadResidencia"
                    required
                    value={nuevaPersona.CiudadResidencia}
                    onChange={handleChange}
                />
                <Campo
                    placeHolder="Direccion Postal"
                    type="number"
                    name="DireccionPostal"
                    required
                    value={nuevaPersona.DireccionPostal}
                    onChange={handleChange}
                />
                <Campo
                    placeHolder="E-mail"
                    type="email"
                    name="CorreoElectronico"
                    required
                    value={nuevaPersona.CorreoElectronico}
                    onChange={handleChange}
                />
                <Campo
                    placeHolder="Telefono"
                    type="number"
                    name="Telefono"
                    required
                    value={nuevaPersona.Telefono}
                    onChange={handleChange}
                />
                <Campo2
                    required
                    name="ViveFallecio"
                    value={nuevaPersona.ViveFallecio}
                    onChange={handleChange}
                />
                <Campo
                    placeHolder="Fecha de Fallecimiento"
                    type="text"
                    name="FechaFallecimiento"
                    required
                    value={nuevaPersona.FechaFallecimiento}
                    onChange={handleChange}
                />
                <p className='msg-fallecido'>si selecciono fallecio ingrese la fecha de fallecimiento de la persona, de lo contrario solamente ponga "--".</p>

                <input className='btn-dar-alta' type="submit" value="Dar Alta"/>
            </form>
        </section>
    );
}

export default FormularioDeAlta;