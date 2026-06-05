//file for temporary hardcoded data in-place of a backend database

import marlstoneImg from '../assets/marlstone.jpg';
import parkVictoriaImg from '../assets/parkvictoria.jpg';
import lemarchantImg from '../assets/lemarchanttowers.jpg';
import fenwickImg from '../assets/fenwicktower.jpg';
import southPointImg from '../assets/southpointapartments.jpg';

export const users = [
    {
        id: 1,
        fullName: "Michael Mroz",
        email: "mroz@example.com",
        password: "pw1234"
    }
];

export const apartments = [
    {
        id: 1,
        name: "The Marlstone",
        address: "5540 Spring Garden Rd",
        neighbourhood: "Spring Garden",
        description: "High-rise tower in a quiet residential neighbourhood.",
        image: marlstoneImg,
        averageRating: 5.0,
        numReviews: 1,
        aiSummaries: [],
        issues: []
    },
    {
        id: 2,
        name: "Park Victoria",
        address: "1496 Carlton St",
        neighbourhood: "South End",
        description: "Lovely place",
        image: parkVictoriaImg,
        averageRating: 4.5,
        numReviews: 2,
        aiSummaries: ["Well maintained", "Quiet"],
        issues: ["Expensive"]
    },
    {
        id: 3,
        name: "Le Marchant Towers",
        address: "1585 Le Marchant St",
        neighbourhood: "West End",
        description: "Modern facilities near Dalhousie University",
        image: lemarchantImg,
        averageRating: 3.7,
        numReviews: 3,
        aiSummaries: ["Good location"],
        issues: ["Parking limited", "Aging building"]
    },
    {
        id: 4,
        name: "Fenwick Tower",
        address: "5599 Fenwick St.",
        neighbourhood: "Downtown",
        description: "Located in the heart of Halifax surrounded by beautiful parks",
        image: fenwickImg,
        averageRating: 3.3,
        numReviews: 3,
        aiSummaries: ["Great views"],
        issues: ["Elevator issues", "Security concerns"]
    },
    {
        id: 5,
        name: "Southpoint Apartments",
        address: "1050 South Park St.",
        neighbourhood: "South End",
        description: "Modern apartment complex in a lively area.",
        image: southPointImg,
        averageRating: 2.5,
        numReviews: 4,
        aiSummaries: [],
        issues: []
    }
];

export let reviews = [
    {
        id: 1,
        apartmentId: 1,
        rating: 4,
        body: "Review body here!",
        date: "June 4th 2026",
        userId: 1
    }
];

export function addUser(newUser) {
    users.push(newUser);
}

export function addReviews(newReview) {
    reviews.push(newReview);
}

export function removeReview(reviewId) {
    reviews = reviews.filter(r => r.id != reviewId);
}

export function addApartment(newApartment) {
    apartments.push(newApartment);
}