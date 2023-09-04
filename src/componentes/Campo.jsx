import '../assets/css/componets/Campo.css'

const Campo = (props) => {
    const { placeHolder, type, required, name, value, onChange  } = props;
    return (
        <div>
            <input 
                className='form-campo' 
                type={type} 
                placeholder={placeHolder}
                required={required}
                name={name}
                value={value}
                onChange={onChange}
            />

            
        </div>
    );
}

export default Campo;
