import WearthersCond from "./WearthersCond";

const Weathers = () => {
	const temperatures = [10, 8, 32, 52, 1, 2, 20, 64, 32, 54, 10];

	return (
		<>
			<h1>Weather ☁🌡</h1>
			{temperatures.map((temperature, index) => (
				<div key={index}>
					<WearthersCond temperature={temperature} />
				</div>
			))}
		</>
	);
};

export default Weathers;
