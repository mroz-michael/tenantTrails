//file for temporary hardcoded data in-place of a backend database

export const users = [
    {
        fullName: "Michael Mroz",
        email: "mroz@example.com",
        password: "pw1234"
    }
];

export const apartments = [
    {
        name: "The Marlstone",
        address: "5540 Spring Garden Rd",
        neighbourhood: "Spring Garden",
        averageRating: 5.0,
        numReviews: 1,
        summaries: []
    },
    {
        name: "Park Victoria",
        address: "1496 Carlton St",
        neighbourhood: "South End",
        averageRating: 4.5,
        numReviews: 2,
        summaries: ["Well maintained", "Quiet", "Expensive"]
    },
    {
        name: "Le Marchant Towers",
        address: "1585 Le Marchant St",
        neighbourhood: "West End",
        averageRating: 3.7,
        numReviews: 3,
        summaries: ["Good location", "Parking limited", "Aging building"]
    },
    {
        name: "Fenwick Tower",
        address: "5599 Fenwick St.",
        neighbourhood: "Downtown",
        averageRating: 3.3,
        numReviews: 3,
        summaries: ["Elevator issues", "Great views", "Security concerns"]
    },
    {
        name: "Southpoint Apartments",
        address: "1050 South Park St.",
        neighbourhood: "South End",
        averageRating: 2.5,
        numReviews: 4,
        summaries: []
    }
];

export const reviews = [];

export function addUser(newUser) {
    users.push(newUser);
}

export function addReviews(newReview) {
    reviews.push(newReview);
}

export function addApartment(newApartment) {
    apartments.push(newApartment);
}