const ProductInfo = () => {
	const product = ["Pc", "3000$", "Sell"];
	return (
		<div>
			name: {product[0]} <br />
			price: {product[1]} <br />
			status: {product[2]}
		</div>
	);
};

export default ProductInfo;
