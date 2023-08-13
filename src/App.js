import './App.css'
import Content from './pages/content/content.jsx'
import React from 'react'
import DetailsFilms, { loader } from './pages/detailsFilms/detailsFilms'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error/errorPage'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Content />,
			errorElement: <ErrorPage />
		},
		{
			path: 'detailsFilms/:filmId',
			element: <DetailsFilms />,
			loader: loader
		}
	])

	return (
		<RouterProvider router={router}></RouterProvider>
	)
}

export default App
