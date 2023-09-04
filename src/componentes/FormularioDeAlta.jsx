import Campo from './Campo';
import '../assets/css/componets/FormularioDeAlta.css'
import Campo2 from './Campo2';
import { useState } from 'react';

const FormularioDeAlta = ({ manejarNuevaPersona }) => {
    const [formData, setFormData] = useState({
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

    const manejarCambioForm = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const nuevaPersona = await manejarNuevaPersona(formData);
          // Limpia el formulario o realiza otras acciones después de crear la persona
          setFormData({
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
        } catch (error) {
          console.error('Error al crear la persona:', error);
        }
      };

    return (
        <section className="opcion-swap">
            <form className='form__alta' onSubmit={manejarNuevaPersona}>
                <Campo
                    placeHolder="Nombre"
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleFormSubmit}
                    required
                />
                <Campo
                    placeHolder="Apellido"
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleFormSubmit}
                    required
                />
                <Campo
                    placeHolder="Foto (Url)"
                    type="search"
                    name="foto"
                    value={formData.foto}
                    onChange={handleFormSubmit}
                    required
                />
                <Campo
                    placeHolder="DNI"
                    type="number"
                    name="dni"
                    value={formData.dni}
                    onChange={handleFormSubmit}
                    required
                />
                <Campo
                    placeHolder="Fecha de Nacimiento"
                    type="text"
                    name="fecha de nacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleFormSubmit}
                    required
                />
                <Campo
                    placeHolder="Edad Actual"
                    type="number"
                    name="edad"
                    value={formData.edadActual}
                    onChange={handleFormSubmit}
                    required
                />
                <Campo
                    placeHolder="Ciudad de Residencia"
                    type="text"
                    name="ciudad"
                    value={formData.ciudadResidencia}
                    onChange={handleFormSubmit}
                    required
                />
                <Campo
                    placeHolder="Direccion Postal"
                    type="number"
                    name="codigo postal"
                    value={formData.direccionPostal}
                    onChange={handleFormSubmit}
                    required
                />
                <Campo
                    placeHolder="E-mail"
                    type="email"
                    name="email"
                    value={formData.correoElectronico}
                    onChange={handleFormSubmit}
                    required
                />
                <Campo
                    placeHolder="Telefono"
                    type="number"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleFormSubmit}
                    required
                />
                <Campo2
                    value={formData.viveFallecio}
                    onChange={handleFormSubmit}
                    required
                />
                <Campo
                    placeHolder="Fecha de Fallecimiento"
                    type="text"
                    name="fecha de fallecimiento"
                    value={formData.fechaFallecimiento}
                    onChange={handleFormSubmit}
                    required
                />

                <input className='btn-dar-alta' type="submit" value="Dar Alta"/>
            </form>
        </section>
    );
}

export default FormularioDeAlta;