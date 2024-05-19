import { trpc } from '../trpc';
import { z } from 'zod';

const userProcedure = trpc.procedure.input(z.object({ userId: z.string() }));
// The UserRouter is a router that contains all the procedures that the client can call.
export const UserRouter = trpc.router({
	get: userProcedure.query(({ input }) => {
		return { id: input.userId, name: 'John Doe' };
	}),
	update: userProcedure
		.input(z.object({ name: z.string() }))
		.output(z.object({ id: z.string(), name: z.string() }))
		.mutation(({ input }) => {
			console.log('This function updates user in server.');
			return { id: input.userId, name: input.name };
		})
});
