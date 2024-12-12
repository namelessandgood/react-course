const ComponetOne = ({ count, onClickHeadler }) => {
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={onClickHeadler}>Click me</button>
		</div>
	);
};

export default ComponetOne;
