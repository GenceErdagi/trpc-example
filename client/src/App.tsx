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
	const [result, setResult] = useState<unknown>();
	useEffect(() => {
		const fetchData = async () => {
			const result = await client.sayHi.query();
			setResult(result);
		};
		fetchData();
		console.log(result);
	}, [result]);

	return <>Hello World</>;
}

export default App;
