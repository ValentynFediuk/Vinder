import express from 'express'
import cors from "cors";
import api from "express/lib/application.js";
import mongoose from "mongoose";
import Post from "./Post.js";

const PORT = 5000;
// const DB_URL = `mongodb+srv://Valentyn:123Winderton123$@vinder-db.nglvjgw.mongodb.net/?retryWrites=true&w=majority`
const DB_URL = `mongodb://localhost:27017/test`

const app = express();

app.use(cors())
app.use(express.json());


app.post('/', async (req, res) => {
    const {author, title, content, picture} = req.body;

    if (!author || !title || !content) {
        return res.status(500).json({message: 'Not valid data'})
    }

    const post = await Post.create({author, title, content, picture})
    return res.status(200).json('Server works')
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('Server started on port ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()