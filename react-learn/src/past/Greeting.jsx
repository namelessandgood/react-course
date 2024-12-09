const Greeting = () => {
	const message = "Hello, Welcome to React";
	const date = new Date().toUTCString();
	return (
		<div>
			<h1>{message}</h1>
			<p>{date}</p>
		</div>
	);
};

export default Greeting;
