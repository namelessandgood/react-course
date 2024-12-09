import PersonProps from "./componets/PersonProps";
import ProductProps from "./componets/ProductProps";

// 1:15:41 video part 1

const App = () => {
	return (
		<>
			<PersonProps name={"Ali"} age={23} />
			<ProductProps name={"Product Name"} price={100} />
		</>
	);
};

export default App;
