import DeleteIcon from "../ui/DeleteIcon.jsx";
import GamerTagContainer from "../ui/GamerTagContainer.jsx";
import PlayerName from "../ui/PlayerName.jsx";
import UserIcon from "../ui/UserIcon.jsx";

const PlayerTag = ({ name, colors, onDelete, showDelete }) => {
	return (
		<GamerTagContainer colors={colors}>
			<PlayerName>
				<UserIcon /> {name}
			</PlayerName>
			{showDelete && <DeleteIcon onClick={onDelete} />}
		</GamerTagContainer>
	);
};

export default PlayerTag;
