import Head from 'next/head';
import Header from '../src/components/Header';
export default function Home() {
	return (
		<div className=''>
			<title>Amazon 2.0 build</title>
			<link rel='icon' href='/favicon.ico' />

			<Header />
		</div>
	);
}
