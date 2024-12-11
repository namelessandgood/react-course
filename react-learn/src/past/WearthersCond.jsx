const WearthersCond = ({ temperature = 0 }) => {
	if (temperature < 15) {
		return <h1>It&apos;s cold 🥶 {temperature}</h1>;
	} else if (temperature >= 15 && temperature < 30) {
		return <h1>It&apos;s nice 🌼 {temperature}</h1>;
	}
	return <h1>It&apos;s hot 🥵 {temperature}</h1>;
};

export default WearthersCond;
