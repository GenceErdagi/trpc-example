import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '../../server/routers/index';

const client = createTRPCProxyClient<typeof AppRouter>({
	links: [
		httpBatchLink({
			url: 'http://localhost:8000/trpc'
		})
	]
});

async function main() {
	const result = await client.users.adminOnlyProcedure.query();
	console.log(result);
}

main();
