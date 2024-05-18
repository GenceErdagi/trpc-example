import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.listen(8000, () => {
	console.log('Server is running on port 8000');
});
