import express from 'express';
import mongoose from 'mongoose';
import router from './PostRouter.js';

const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.f8r7e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        app.listen(PORT, () => {
            console.log(`SERVER STARTED ON PORT ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

startApp();
