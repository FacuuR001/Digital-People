import '../assets/css/componets/Campo.css'

const Campo = (props) => {
    const { placeHolder, type, required  } = props
    return (
        <div>
            <input 
                className='form-campo' 
                type={type} 
                placeholder={placeHolder}
                required={required}
            />

            
        </div>
    );
}

export default Campo;