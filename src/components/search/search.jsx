import React from 'react'
import { Box, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { fetchPopularFilms, fetchSearchFilms } from '../../store/filmsSlices'


const Search = () => {
	const dispatch = useDispatch()

	async function renderFilmsSearch(valueSearch) {
		dispatch(fetchSearchFilms(valueSearch))
	}
	async function renderFilmsSearchEmpty() {
		dispatch(fetchPopularFilms())
	}
	return (
		<Box
			component='form'
			sx={{
				'& > :not(style)': { m: 1, width: '25ch' }
			}}
			noValidate
			autoComplete='off'
		>
			<TextField
				id='filled-basic'
				label='Поиск'
				variant='filled'
				onChange={e => {
					if (e.target.value === '') {
						renderFilmsSearchEmpty()
					} else {
						renderFilmsSearch(e.target.value)
					}
				}}
			/>
		</Box>
	)
}

export default Search
