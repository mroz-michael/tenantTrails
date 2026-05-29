
function SearchInput({value, onChange, placeholder}) {

    return(
        <div className="searchBar">
            <span className="searchIcon">🔍</span>
            <input type="text" style={{border: 'none'}}value={value} onChange={onChange} placeholder={placeholder}/>
        </div>
    )
}

export default SearchInput;