import { trpc } from '../trpc';
import { UserRouter } from './users';
// The AppRouter is a router that contains all the procedures that the client can call.
export const AppRouter = trpc.router({
	sayHi: trpc.procedure.query(() => 'Hello World'),
	logToServer: trpc.procedure
		.input((message) => {
			if (typeof message === 'string') return message;
			throw new Error('Message must be a string');
		})
		.mutation((req) => {
			console.log('Client says: ', req.input);
			return `Server says: Recived message is ${req.input}`;
		}),
	users: UserRouter
});
