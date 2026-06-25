import '../styles/apartmentHeader.css';
import StarRating from './StarRating';

function ApartmentHeader({apartment}) {
    const {name, address, neighbourhood, description, averageRating, numReviews} = apartment;
    const avgRating = isNaN(Number(averageRating)) ? 0 : Number(averageRating);
    return(
        <div className='apartmentHeaderContainer'>
            <div id='apartmentHeaderLeft'>
                <h1>{name}</h1>
                <span>📍{address} - {neighbourhood}</span>
                <span>{description}</span>
            </div>
            <div id='apartmentHeaderRight'>
                <span id='averageRating'>{avgRating.toFixed(1)}</span>
                <StarRating rating={avgRating} color='goldenrod'/>
                <span id='numReviews'>{numReviews} Review{numReviews == 1 ? "" : "s"}</span>
            </div>
        </div>
    )
}

export default ApartmentHeader;