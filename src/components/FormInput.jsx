function FormInput ({label, type, name, value, onChange, placeholder, error}) {

    return(
        <div className="formInput">
            <label htmlFor={name}>{label}</label>
            <input id={name} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}/>
            {error && <p className="errorMessage">{error}</p> }
        </div>
    )
}

export default FormInput;