import '../assets/css/componets/Campo.css'

const Campo2 = () => {
    return (
        <div>
            <select className='form-campo'>
                <option className='asd' value="1"  disabled defaultValue>--- Vive / Fallecio ---</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
            </select>
        </div>
    );
}

export default Campo2;