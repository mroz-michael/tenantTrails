import '../styles/apartmentCard.css';

function ApartmentCard({apartment}) {
    const averageRating = isNaN(apartment.averageRating) ? 0 : apartment.averageRating;

    const filledStars = Math.round(averageRating);
    const emptyStars = 5 - filledStars;

    return(
        <div className='apartmentCardContainer'>
            <div className='cardImageContainer'>
                <img src={apartment.image} alt={apartment.name}/>
                <span className='ratingBadge'>★ {averageRating.toFixed(1)}</span>
            </div>
            <div id='apartmentDetails'>
                <h5 style={{fontWeight: "bolder"}}>{apartment.name}</h5>
                <p style={{fontWeight: "lighter"}}>📍 {apartment.address} - {apartment.neighbourhood}</p>
            </div>
            <div id='apartmentSummaries'>
                {
                    apartment.summaries.length > 0 ?
                    apartment.summaries.map(s => (
                        <span key={s} className='summary'>{s}</span>
                    ))
                    :
                    <span className='summary'>No AI summary yet</span>
                }
            </div>
            <div id='apartmentCardFooter'>
                <p><span>{apartment.numReviews}</span>reviews</p>
                <div className='reviewStars'>
                    {'★'.repeat(filledStars)}
                    {'☆'.repeat(emptyStars)}
                </div>
            </div>
        </div>
    )

}

export default ApartmentCard;