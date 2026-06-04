import '../styles/propertyInfo.css';

function PropertyInfo({info={}, neighbourhood}) {
    const attributes = [
        { label: "Landlord", value: "Killam Properties" },
        { label: "Units",    value: "88" },
        { label: "Year built", value: "1975" },
    ];

    return(
        <div id='propertyInfoContainer'>
            <h3>Property Info</h3>
            {attributes.map(({ label, value }) => (
            <div className="attribute" key={label}>
                <span className="attributeLabel">{label}</span>
                <span className="attributeValue">{value}</span>
            </div>
            ))}
            <div className='attribute'>
                <span className='attributeLabel'>Neighourhood</span>
                <span className='attributeValue'>{neighbourhood}</span>
            </div>
        </div>
    )
}

export default PropertyInfo;