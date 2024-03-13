import mongoose from "mongoose";

const subSchema = new mongoose.Schema({
    Title: String,
    Year: String,
    imdbID: String,
    Type: String,
    Poster: String,
})

const wishlistSchema = new mongoose.Schema({
    email: String,
    wish: [subSchema],
});

export default mongoose.model("Wishlist", wishlistSchema, "Wishlists");