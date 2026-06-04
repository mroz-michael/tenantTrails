function UserReview({review, apartment}) {
    return (
        <div className="userReviewItem" key={review.id}>
            <div className="userReviewItemLeft">
                <span className="userReviewApartmentName">{apartment ? apartment.name : "Unknown"}</span>
                <StarRating rating={review.rating} color="goldenrod" />
                <p className="userReviewSnippet">{review.body.slice(0, 100)}...</p>
            </div>
            <div className="userReviewItemActions">
                <span className="userReviewView">View</span>
                <button className="userReviewEdit">Edit</button>
                <button className="userReviewDelete">Delete</button>
            </div>
        </div>
    );
}

export default UserReview;