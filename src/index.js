import './index.css'
import React from 'react'
import { App } from './App'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { ChakraProvider } from '@chakra-ui/react'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ChakraProvider>
					<App/>
				</ChakraProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)

