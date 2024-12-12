import { FaBeer } from "react-icons/fa";
import { TbCarTurbine } from "react-icons/tb";

const ProfileCard = () => {
	const styles = {
		color: "teal",
		fontSize: "24px",
		"font-weight": "bold",
		padding: "10px 10px",
		margin: "10px 10px",
		border: "1px solid teal",
		"border-radius": "5px",
	};

	return (
		<div>
			<div
				style={(styles, { colorRendering: "auto", backgroundColor: "teal" })}
			>
				new change for life when is go new jurany
			</div>
			<FaBeer size={"30px"} color="red" />
			<TbCarTurbine color="blue" size={40} />
		</div>
	);
};

export default ProfileCard;
