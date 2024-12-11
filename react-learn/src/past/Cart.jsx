const Cart = () => {
	const items = ["apples", "s9", "sps", "new change", "files good"];

	return (
		<div>
			<h1>Cart 🛒</h1>
			{items.length > 0 && <h2> You have {items.length} items you have</h2>}
			<ul>
				<h4>Products</h4>
				{items.map((items, index) => (
					<li key={index}>{items}</li>
				))}
			</ul>
		</div>
	);
};

export default Cart;
