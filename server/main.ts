import express from 'express';
import cors from 'cors';
import { initTRPC } from '@trpc/server';
import { createExpressMiddleware } from '@trpc/server/adapters/express';

const app = express();

const trpc = initTRPC.create();

//TRPC router
const appRouter = trpc.router({
	sayHi: trpc.procedure.query(() => 'Hello World'),
	logToServer: trpc.procedure
		.input((message) => {
			if (typeof message === 'string') return message;
			throw new Error('Message must be a string');
		})
		.mutation((req) => {
			console.log('Client says: ', req.input);
		})
});

//TRPC middleware adapter
app.use('/trpc', createExpressMiddleware({ router: appRouter }));

app.use(cors({ origin: 'http://localhost:5173' }));

app.listen(8000, () => {
	console.log('Server is running on port 8000');
});

// For TRPC to recognize the client, we need to add the following to the server:
export type AppRouter = typeof appRouter;
