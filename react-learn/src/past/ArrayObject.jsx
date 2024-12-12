import { useState } from "react";

const ArrayObject = () => {
	const [array, setArray] = useState([
		{
			id: 1,
			name: "John",
		},
		{
			id: 2,
			name: "Jane",
		},
		{
			id: 3,
			name: "Doe",
		},
	]);

	const handleClick = () => {
		setArray(
			array.map((item) => {
				if (item.id === 2) {
					return {
						...item,
						name: "Jatoro",
					};
				}
				return item;
			})
		);
	};

	return (
		<div>
			{array.map((item) => {
				return (
					<div key={item.id}>
						<h1>{item.name}</h1>
					</div>
				);
			})}
			<button onClick={handleClick}>Change name user</button>
		</div>
	);
};

export default ArrayObject;
