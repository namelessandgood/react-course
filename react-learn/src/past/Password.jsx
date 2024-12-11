const ValidPassword = () => <h1>Vaild Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isVaild = null }) => {
	return isVaild ? <ValidPassword /> : <InvalidPassword />;
};

export default Password;
