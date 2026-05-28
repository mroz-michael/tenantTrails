//file for temporary hardcoded data in-place of a backend database

export const users = [
    {
        fullName: "Michael Mroz",
        email: "mroz@example.com",
        password: "pw1234"
    }
];

export const reviews = [];

export const apartments = [];

export function addUser(newUser) {
    users.push(newUser);
}

export function addReviews(newReview) {
    reviews.push(newReview);
}

export function addApartment(newApartment) {
    apartments.push(newApartment);
}