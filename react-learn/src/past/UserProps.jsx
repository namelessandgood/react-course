const UserProps = ({ name, age, hibbes }) => {
	name ??= "No Name";
	age ??= 0;
	hibbes ??= [];
	return (
		<section>
			<h1>Name: {name}</h1>
			<h2>Age: {age}</h2>
			<h3>Hibbes: {hibbes.join(" ")}</h3>
		</section>
	);
};

export default UserProps;
