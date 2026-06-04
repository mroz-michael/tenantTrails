import "../styles/aiSummary.css";

function AISummary({summary=[], issues=[]}) {

    return(
    <div className="aiSummaryContainer">
        <div id="aiHeader">
            <span>✦</span>
            <p>AI-Generated Summary</p>
        </div>
        <p>
        Tenants consistently praise the location and proximity to Quinpool Road.
        </p>
    </div>
    )
}

export default AISummary;