import Campo from './Campo';
import '../assets/css/componets/FormularioDeAlta.css'
import Campo2 from './Campo2';

const FormularioDeAlta = () => {
    return (
        <section className="opcion-swap">
            <form className='form__alta'>
                <Campo
                    placeHolder="Nombre"
                    type="text"
                    required
                />
                <Campo
                    placeHolder="Apellido"
                    type="text"
                    required
                />
                <Campo
                    placeHolder="Foto (Url)"
                    type="search"
                    required
                />
                <Campo
                    placeHolder="Fecha de Nacimiento"
                    type="text"
                    required
                />
                <Campo
                    placeHolder="Edad Actual"
                    type="number"
                    required
                />
                <Campo
                    placeHolder="Ciudad de Residencia"
                    type="text"
                    required
                />
                <Campo
                    placeHolder="Direccion Postal"
                    type="number"
                    required
                />
                <Campo
                    placeHolder="E-mail"
                    type="email"
                    required
                />
                <Campo
                    placeHolder="Telefono"
                    type="number"
                    required
                />
                <Campo2
                    placeHolder="Telefono"
                    type="number"
                    required
                />
                <Campo
                    placeHolder="Fecha de Fallecimiento"
                    type="text"
                    required
                />

                <input className='btn-dar-alta' type="submit" value="Dar Alta"/>
            </form>
        </section>
    );
}

export default FormularioDeAlta;