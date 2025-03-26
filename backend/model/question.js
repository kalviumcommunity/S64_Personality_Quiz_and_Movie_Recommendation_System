const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [
        {
            text: { type: String, required: true },
            trait: { type: String, required: true }, // Maps to personality trait
        },
    ],
});

module.exports = mongoose.model("Question", QuestionSchema);
