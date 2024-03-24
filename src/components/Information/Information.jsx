import PropTypes from 'prop-types';

import { InformationLayout } from '../../components';

export const Information = ({ status }) => {
	return <InformationLayout status={status} />;
};

Information.propTypes = {
	status: PropTypes.string,
};
