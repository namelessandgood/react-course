const Calc = () => {
	let num1 = 2,
		num2 = 2;

	return (
		<div>
			<p>names is = {["sai", "ram", "krishna"].join(" - ")} </p>

			<p>add the numbers {num1 + num2}</p>
			<p>sub the numbers {num1 - num2}</p>
			<p>mulit the numbers {num1 * num2}</p>
			<p>div the numbers {num1 / num2}</p>
			<p>mod the numbers {num1 % num2}</p>

			<p>power the numbers {num1 ** num2}</p>
		</div>
	);
};

export default Calc;
