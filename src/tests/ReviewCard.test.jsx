import { render, screen } from "@testing-library/react";
import ReviewCard from "../components/ReviewCard";

/*code taken and modified from Lab 3 slides */


//adding mock data to get around issue with importing image files
vi.mock("../data/mockData", () => ({
    users: [{ id: 1, fullName: "James", email: "james@example.com" }],
    apartments: [],
    reviews: []
}));


describe("ReviewCard", () => {
    it("renders the review body", () => {
        const review = {rating: 4, body: "Great building.", date: "2026-04-02", author: "James", img: ""}
        render(
            <ReviewCard
                review={review}
            />
        );
        expect(screen.getByText("Great building.")).toBeTruthy();
    });

    it("renders the correct number of stars", () => {
        render(<ReviewCard review={{rating: 3, body: "OK", date: "2026-01-01", userId: 1}} />);
        const starSpan = screen.getByText((content) => content.includes("★"));
        expect(starSpan.textContent.split("★").length - 1).toBe(3);
    });

});
