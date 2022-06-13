import './index.css'
import React from 'react'
import { App } from './App'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ChakraProvider>
				<App/>
			</ChakraProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)

