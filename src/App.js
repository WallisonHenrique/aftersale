import React from 'react';
import { Provider } from 'react-redux';

import Connector from './utils/Connector';
import { Store } from './store/index';
import GlobalStyle  from './styles/global';

export default function App() {
	return (
		<Provider store={Store}>
			<GlobalStyle />
			<Connector />
		</Provider>
	);
}
