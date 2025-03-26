const mongoose = require("mongoose");
const Question = require("./model/question");

mongoose.connect("mongodb+srv://harshitasonis64:abcd1234@asap.zudzs.mongodb.net/")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

const questions = [
    {
        question: "How do you prefer to spend your weekend?",
        options: [
            { text: "🌍 Exploring a new place", trait: "Adventurous" },
            { text: "📖 Reading a book", trait: "Thoughtful" },
            { text: "❤️ Helping others", trait: "Compassionate" },
            { text: "📊 Planning next week", trait: "Strategic" },
        ],
    },
    {
        question: "How do you handle challenges?",
        options: [
            { text: "🏃‍♂️ Jump in and figure it out", trait: "Bold" },
            { text: "🤔 Think before acting", trait: "Analytical" },
            { text: "🤝 Seek help from others", trait: "Supportive" },
            { text: "📝 Make a structured plan", trait: "Methodical" },
        ],
    },
    {
        question: "Which environment do you thrive in?",
        options: [
            { text: "🏔️ Outdoor adventures", trait: "Adventurous" },
            { text: "🏡 A quiet, cozy place", trait: "Thoughtful" },
            { text: "👥 Around people and socializing", trait: "Compassionate" },
            { text: "🏢 An organized workspace", trait: "Strategic" },
        ],
    },
    {
        question: "How do you prefer to learn something new?",
        options: [
            { text: "🛠️ Hands-on experience", trait: "Bold" },
            { text: "📚 Reading and research", trait: "Analytical" },
            { text: "🗣️ Group discussions", trait: "Supportive" },
            { text: "📝 Step-by-step guide", trait: "Methodical" },
        ],
    },
    {
        question: "What describes you best in a group project?",
        options: [
            { text: "💡 Idea generator", trait: "Adventurous" },
            { text: "📖 Researcher", trait: "Thoughtful" },
            { text: "🫂 Team motivator", trait: "Compassionate" },
            { text: "📊 Planner and organizer", trait: "Strategic" },
        ],
    },
    {
        question: "How do you make important decisions?",
        options: [
            { text: "🔥 Trust my gut", trait: "Bold" },
            { text: "🔍 Analyze every detail", trait: "Analytical" },
            { text: "💬 Talk it out with friends", trait: "Supportive" },
            { text: "📝 Make a list of pros and cons", trait: "Methodical" },
        ],
    },
    {
        question: "What is your ideal vacation?",
        options: [
            { text: "🌄 Adventure trip", trait: "Adventurous" },
            { text: "📖 Quiet retreat", trait: "Thoughtful" },
            { text: "👨‍👩‍👧‍👦 Family getaway", trait: "Compassionate" },
            { text: "🗺️ Carefully planned itinerary", trait: "Strategic" },
        ],
    },
    {
        question: "How do you react to surprises?",
        options: [
            { text: "😆 Excited!", trait: "Bold" },
            { text: "🤔 Analyze the situation first", trait: "Analytical" },
            { text: "🥰 Appreciate the effort", trait: "Supportive" },
            { text: "🧐 Prefer to know in advance", trait: "Methodical" },
        ],
    },
    {
        question: "What do you value most in a friendship?",
        options: [
            { text: "🌍 Shared adventures", trait: "Adventurous" },
            { text: "💭 Deep conversations", trait: "Thoughtful" },
            { text: "💖 Emotional support", trait: "Compassionate" },
            { text: "🤝 Reliability", trait: "Strategic" },
        ],
    },
    {
        question: "Your ideal way to unwind after a long day?",
        options: [
            { text: "🏃‍♂️ Exercise or adventure", trait: "Bold" },
            { text: "📖 Read or reflect", trait: "Analytical" },
            { text: "👫 Spend time with loved ones", trait: "Supportive" },
            { text: "📋 Plan for tomorrow", trait: "Methodical" },
        ],
    },
];

Question.insertMany(questions)
    .then(() => {
        console.log("Questions seeded successfully");
        mongoose.connection.close();
    })
    .catch((error) => console.error("Error inserting questions:", error));
