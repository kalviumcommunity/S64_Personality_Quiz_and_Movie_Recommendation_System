const mongoose = require("mongoose");
const Movie = require("./model/movie");

mongoose.connect("mongodb+srv://harshitasonis64:abcd1234@asap.zudzs.mongodb.net/")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

const movies = [
    { personalityType: "Adventurous Explorer", recommendations: ["Into the Wild", "The Secret Life of Walter Mitty", "Wild"] },
    { personalityType: "Thoughtful Analyst", recommendations: ["A Beautiful Mind", "The Imitation Game", "The Social Network"] },
    { personalityType: "Compassionate Healer", recommendations: ["The Pursuit of Happyness", "Patch Adams", "Wonder"] },
    { personalityType: "Strategic Leader", recommendations: ["The Wolf of Wall Street", "Moneyball", "The Founder"] },
    { personalityType: "Imaginative Dreamer", recommendations: ["Inception", "Eternal Sunshine of the Spotless Mind", "Life of Pi"] },
    { personalityType: "Entertaining Socialite", recommendations: ["Deadpool", "Superbad", "The Hangover"] },
    { personalityType: "Intellectual Thinker", recommendations: ["Interstellar", "Good Will Hunting", "The Theory of Everything"] },
    { personalityType: "Emotional Idealist", recommendations: ["The Fault in Our Stars", "Titanic", "Me Before You"] },
    { personalityType: "Logical Problem Solver", recommendations: ["Sherlock Holmes", "The Big Short", "Margin Call"] },
    { personalityType: "Curious Investigator", recommendations: ["The Da Vinci Code", "Gone Girl", "Zodiac"] },
    { personalityType: "Bold Adventurer", recommendations: ["Mad Max: Fury Road", "Gladiator", "300"] },
    { personalityType: "Free-Spirited Nomad", recommendations: ["Eat Pray Love", "Nomadland", "Tracks"] },
    { personalityType: "Visionary Creator", recommendations: ["The Grand Budapest Hotel", "La La Land", "Amélie"] },
    { personalityType: "Romantic Heart", recommendations: ["Pride & Prejudice", "The Notebook", "A Star is Born"] },
    { personalityType: "Comedy Enthusiast", recommendations: ["Step Brothers", "21 Jump Street", "Anchorman"] },
    { personalityType: "Psychological Thriller Fan", recommendations: ["Shutter Island", "Fight Club", "Black Swan"] }
];

Movie.insertMany(movies)
    .then(() => {
        console.log("Movies seeded successfully");
        mongoose.connection.close();
    })
    .catch((error) => console.error("Error inserting movies:", error));
