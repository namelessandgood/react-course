const Valid = ({ isValid = null }) => {
	if (isValid) {
		return trueVaild();
	}
	return falseVaild();
};

const falseVaild = () => <h1>Invalid</h1>;
const trueVaild = () => <h1>Valid</h1>;

export default Valid;
