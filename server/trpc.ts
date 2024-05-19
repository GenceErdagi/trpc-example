import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { createContext } from './context';
//Initiate TRPC
export const trpc = initTRPC
	.context<inferAsyncReturnType<typeof createContext>>()
	.create();
