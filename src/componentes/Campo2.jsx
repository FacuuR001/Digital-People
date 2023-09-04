import '../assets/css/componets/Campo.css'

const Campo2 = (props) => {
    const { value, onChange  } = props;

    return (
        <div>
            <select className='form-campo' value={value} onChange={onChange}>
                <option className='asd' value="1"  disabled defaultValue>--- Vive / Fallecio ---</option>
                <option value="Vive"> Vive </option>
                <option value="Falleciò"> Falleciò </option>
            </select>
        </div>
    );
}

export default Campo2;