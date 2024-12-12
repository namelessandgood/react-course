import { useState } from "react";

const ObjectSet = () => {
	const [myObjectSet, setMyObjectSet] = useState({
		name: "John",
		age: 30,
	});

	const handelClick = () => {
		setMyObjectSet({ ...myObjectSet, name: "Jane" });
	};
	return (
		<div>
			<h1>{myObjectSet.name}</h1>
			<p>{myObjectSet.age}</p>
			<button onClick={handelClick}>clickMe</button>
		</div>
	);
};

export default ObjectSet;
