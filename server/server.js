import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';


// App Config

const PORT = process.env.PORT || 4000;
const app = express();


// Initialize Middleware
app.use(express.json());
app.use(cors());

await connectDB();


// Api Routes

app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});