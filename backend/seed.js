const mongoose = require("mongoose");
const Book = require("./src/books/book.model"); // Verify this path matches your file structure
require("dotenv").config();

// Import your local JSON data
// Note: We are reading the file from the frontend folder
const fs = require("fs");
const path = require("path");
const booksDataPath = path.join(__dirname, "../frontend/public/books.json");

async function seedDatabase() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected!");

    // Read the JSON file
    const rawData = fs.readFileSync(booksDataPath);
    const booksData = JSON.parse(rawData);

    // Remove the '_id' field from the JSON data so MongoDB can generate unique ones
    // This prevents duplicate key errors if you run this multiple times
    const cleanData = booksData.map(book => {
        const { _id, ...rest } = book; 
        return rest;
    });

    console.log("Clearing existing books...");
    await Book.deleteMany({}); // Warning: This deletes everything in the books collection!

    console.log("Inserting new books...");
    await Book.insertMany(cleanData);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();