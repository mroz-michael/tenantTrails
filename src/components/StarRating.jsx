import '../styles/starRating.css';

function StarRating({ rating, color="gray", max=5 }) {
   const rounded = Math.round(rating) ? Math.round(rating) : 0;

    const fill = () => {
        const stars = Array(max).fill('');
        let filled = 0;
        for (let i = 0; i < max; i++) {
            stars[i] = filled++ < rounded ? "★" : "☆";
        }
        return stars;
    }

    return(
        <div className='reviewStars'>
           <span style={{color}}>{fill()}</span>
        </div>
    )
}

export default StarRating;