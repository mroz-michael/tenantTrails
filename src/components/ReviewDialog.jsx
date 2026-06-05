import { useState } from "react";
import "../styles/reviewDialog.css";

function ReviewDialog({ onClose, onSubmit, initialValues, isEditing=false }) {
    const [rating, setRating] = useState(initialValues?.rating || 0);
    const [body, setBody] = useState(initialValues?.body || "");

    function handleSubmit() {
        if (rating === 0 || !body.trim()) return;
        onSubmit({ rating, body });
        onClose();
    }

    return (
        <div className="reviewDialog">
            <h2>{isEditing ? "Edit Review" : "Write a Review"}</h2>
            <div style={{textAlign: "left"}}>
                <label>Your rating</label>
                <div className="starInput">
                    {[1,2,3,4,5].map(n => (
                        <span key={n} onClick={() => setRating(n)}
                        className={n <= rating ? "filled" : ""}>
                        {n <= rating ? "★" : "☆"}</span>
                    ))}
                </div>
                <span>Click to rate</span>
            </div>
            <label htmlFor="reviewText">Your review</label>
            <textarea
                    id="reviewText"
                    name='reviewText'
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    placeholder="What was your experience living here? Cover maintenance, responsiveness, noise, pests, deposit handling, and anything future tenants should know."
            />
            <div className="reviewDialogActions">
                <button className="cancelButton" onClick={onClose}>Cancel</button>
                <button className="submitButton" onClick={handleSubmit}>{isEditing ? "Save Changes" : "Submit Review"}</button>
            </div>
        </div>
    );
}
export default ReviewDialog;