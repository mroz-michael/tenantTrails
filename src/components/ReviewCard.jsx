import "../styles/reviewCard.css";
import StarRating from './StarRating';

function ReviewCard({ review }) {
    const { rating, date, body, author } = review;
    const niceDate = date && new Date(date).toLocaleDateString();
    return (
        <div className="reviewCardContainer">
            <div className="reviewHeader">
                <div id="reviewHeaderLeft">
                    <span className="review-author">{author ? author : "Unknown Author"}</span>
                    <span>{niceDate || ""}</span>
                </div>
                <div id='reviewHeaderRight'>
                    <StarRating rating={rating} color="goldenrod" />
                </div>
            </div>
            <p id='reviewBody'>{body}</p>
        </div>
    );
}

export default ReviewCard;