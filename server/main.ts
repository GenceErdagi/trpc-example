import express from 'express';
import cors from 'cors';
import { AppRouter } from './routers/index';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { createContext } from './context';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

//TRPC middleware adapter
app.use(
	'/trpc',
	createExpressMiddleware({
		router: AppRouter,
		createContext
	})
);

app.listen(8000, () => {
	console.log('Server is running on port 8000');
});

// For TRPC to recognize the client, we need to add the following to the server:
export type AppRouter = typeof AppRouter;
