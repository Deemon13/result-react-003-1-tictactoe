export const InformationLayout = ({ status, player }) => {
	return (
		<div>
			Information
			<p>Current Player: {player}</p>
			<p>{status}</p>
		</div>
	);
};
