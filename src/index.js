import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from './store/paginationSlices'
import userReducer from './store/userSlices'
import errorReducer from './store/errorSlices'
import filmsReducer from './store/filmsSlices'
import filtersReducer from './store/filtersSlices'


const store = configureStore({
	reducer: {
		users: userReducer,
		error: errorReducer,
		films: filmsReducer,
		pagination: paginationReducer,
		filters: filtersReducer,
	},
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
)

reportWebVitals()
