import "../styles/reviewCard.css";
import StarRating from './StarRating';
import { users } from "../data/mockData";

function ReviewCard({ review }) {
    const { rating, date, body, userId } = review;
    const author = users.find(u => u.id == userId);

    return (
        <div className="reviewCardContainer">
            <div className="reviewHeader">
                <div id="reviewHeaderLeft">
                    <span className="review-author">{author && author.fullName ? author.fullName : "Unknown Author"}</span>
                    <span>{date}</span>
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