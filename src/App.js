import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import store from './redux/store';
import { Home } from './pages';
import './App.css';
import theme from './config/theme';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Home />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
