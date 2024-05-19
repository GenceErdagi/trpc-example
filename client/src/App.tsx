import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '../../server/main';
import './App.css';
import { useEffect, useState } from 'react';
const client = createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: 'http://localhost:8000/trpc'
		})
	]
});

function App() {
	const [result, setResult] = useState();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	useEffect(() => {
		/*const fetchData = async () => {
			const result = await client.users.get.query({ userId: '1' });
			setResult(result);
			setIsLoading(false);
		};*/
		//fetchData();
		console.log(result);
	}, [result]);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	return <>{'result.name'}</>;
}

export default App;
