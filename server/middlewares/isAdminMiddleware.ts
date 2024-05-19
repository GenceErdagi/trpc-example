import { TRPCError } from '@trpc/server';
import { trpc } from '../trpc';

export const isAdminMiddleware = trpc.middleware(({ ctx, next }) => {
	if (!ctx.isAdmin) {
		throw new TRPCError({
			code: 'UNAUTHORIZED',
			message: 'You are not authorized to perform this action'
		});
	}
	return next({ ctx: { ...ctx, user: { id: 1 } } });
});
