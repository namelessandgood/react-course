import { useState } from "react";

const SetCounts = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<>
			<p>{count}</p>
			<button type="button" onClick={increment}>
				+
			</button>
			<button type="button" onClick={decrement}>
				-
			</button>
		</>
	);
};

export default SetCounts;
