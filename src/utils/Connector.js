import React from 'react';
import { connect } from 'react-redux';
import * as ListActions from '../store/ActionCreators';

import GetterDataAPI from '../store/GetterDataAPI';
import Scene from '../components/Scene/Scene';

function Connector(props) {
	return (
		<GetterDataAPI { ...props }>
    		<Scene { ...props } />
    	</GetterDataAPI>
	);
}

const mapStateToProps = (dataStore) => ({
	...dataStore
});

const mapDispatchToProps = {
	...ListActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Connector);