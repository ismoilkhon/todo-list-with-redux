import './index.css'
import React from 'react'
import { App } from './App'
import ReactDOM from 'react-dom'
import { StoreProvider } from './store'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider>
			<ChakraProvider>
				<App/>
			</ChakraProvider>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)

