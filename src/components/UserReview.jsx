import StarRating from './StarRating';
import "../styles/userReview.css";
import { useState } from 'react';
import { removeReview } from '../data/mockData';
function UserReview({review, apartment, handleDelete, handleEdit}) {
    const [showFull, setShowFull] = useState(false);


    return (
        <div className="userReviewItem" key={review.id}>
            <div className="userReviewItemLeft">
                <span className="userReviewApartmentName">{apartment ? apartment.name : "Unknown"}</span>
                <StarRating rating={review.rating} color="goldenrod" />
                {showFull ?
                    <p className='userReviewBody'>{review.body}</p>
                    :
                    <p className="userReviewBody">{review.body.slice(0, 100)}...</p>
                }
            </div>
            <div className="userReviewItemActions">
                <button className="userReviewView" onClick={() => setShowFull(!showFull)}>{showFull ? "Show Less" : "View"}</button>
                <button className="userReviewEdit" onClick={() => handleEdit(review)}>Edit</button>
                <button className="userReviewDelete" onClick={()=>handleDelete(review.id)}>Delete</button>
            </div>
        </div>
    );
}

export default UserReview;