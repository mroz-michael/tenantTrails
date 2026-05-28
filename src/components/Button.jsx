function Button({id, label, clickHandler}) {

    return (
        <button id={id} onClick={clickHandler}>{label}</button>
    )

}

export default Button;