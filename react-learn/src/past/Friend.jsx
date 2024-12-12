import { useState } from "react";
const Friend = () => {
	const [friend, setFriend] = useState(["John", "Jane", "Jack"]);
	const addFriend = () => {
		setFriend([...friend, "New Friend"]);
	};
	const deleteFriend = () => {
		const newFriend = [...friend];
		newFriend.pop();
		setFriend(newFriend);
	};
	return (
		<div>
			{friend.map((name, index) => (
				<p key={index}>{name}</p>
			))}

			<button onClick={addFriend}>add friend</button>
			<button onClick={deleteFriend}>delete friend</button>
		</div>
	);
};

export default Friend;
