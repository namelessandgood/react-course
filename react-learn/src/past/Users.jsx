const Users = () => {
	const users = [
		{ id: 1, name: "John", age: 20 },
		{ id: 2, name: "Doe", age: 202 },
		{ id: 3, name: "Jane", age: 220 },
		{ id: 4, name: "Alice", age: 201 },
	];
	return (
		<div>
			{users.map(({ id, name, age }) => (
				<div key={id}>
					<h4>
						{name} {age}
					</h4>
				</div>
			))}
		</div>
	);
};

export default Users;
