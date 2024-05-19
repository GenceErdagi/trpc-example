import { isAdminMiddleware } from '../middlewares/isAdminMiddleware';
import { trpc } from '../trpc';

// Use the isAdminMiddleware to protect the adminProcedure
export const adminProcedure = trpc.procedure.use(isAdminMiddleware);
