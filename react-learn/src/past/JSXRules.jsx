const JSXRules = () => {
	return (
		<div>
			<h1 style={{ color: "red", fontSize: "24px", backgroundColor: "black" }}>
				JSX Rules
			</h1>
			<p> jsx must return one parent element.</p>
			<p>jsx element must prop closed.</p>
			<p>
				jsx attribute are written using camelCase e.g `className` instead of
				`class`
			</p>
		</div>
	);
};

export default JSXRules;
