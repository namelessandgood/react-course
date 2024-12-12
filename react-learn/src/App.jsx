import { useState } from "react";
import ComponetOne from "./componets/ComponetOne";
import ComponetTwo from "./componets/ComponetTwo";
// 2:20:00
const App = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<ComponetOne count={count} onClickHeadler={() => setCount(count + 1)} />
			<ComponetTwo count={count} onClickHeadler={() => setCount(count + 1)} />
		</div>
	);
};

export default App;
