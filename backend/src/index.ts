import express from 'express';
import cors from 'cors';
import userRoutes from './userRoutes';
import { User } from './models/User';

// combining the arrays
import './userMerger';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Mount the userRoutes
app.use('/', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello, backend!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});



