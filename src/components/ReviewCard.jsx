import "../styles/reviewCard.css";
import StarRating from './StarRating';
import { users } from "../data/mockData";

function ReviewCard({ review }) {
    const { rating, date, body, userId } = review;
    const author = users.find(u => u.id == userId);

    return (
        <div className="reviewCardContainer">
            <div className="reviewHeader">
                <StarRating rating={rating} color="goldenrod" />
                <span>{date}</span>
            </div>
            <p>{body}</p>
            <span className="review-author">{author ? author.fullName : "Unknown Author"}</span>
        </div>
    );
}

export default ReviewCard;