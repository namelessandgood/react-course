const Prodect = () => {
	const prodect = [
		{ id: 1, name: "John", price: 1200 },
		{ id: 2, name: "Doe", price: 1300 },
		{ id: 3, name: "Jane", price: 1400 },
		{ id: 4, name: "Alice", price: 1500 },
	];
	return (
		<div>
			{prodect.map(({ id, name, price }) => (
				<div key={id}>
					<h4>{name}</h4>
					<p>{price}</p>
				</div>
			))}
		</div>
	);
};

export default Prodect;
