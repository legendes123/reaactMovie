import React from 'react'
import { Paper } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { DEFAULT_TYPES_SORT } from '../../defaultValue/defaultValue'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../../store/paginationSlices'
import { fetchPopularFilms, fetchTopRatingFilms } from '../../store/filmsSlices'

const SelectorPages = () => {

	const selectedFilters = useSelector((state) => state.filters)
	const dispatch = useDispatch()
	async function handleChangePage(event, page) {
		dispatch(changeCurrentPage(page))
		switch (selectedFilters.selectSort) {
			case DEFAULT_TYPES_SORT.POPULARITY: {
				dispatch(fetchPopularFilms(page))
				break
			}
			case DEFAULT_TYPES_SORT.RATING: {
				dispatch(fetchTopRatingFilms(page))
				break
			}
		}
	}

	return (
		<>
			<Paper sx={{ position: 'absolute', bottom: '0px' }}>
				<Stack spacing={2}>
					<Pagination
						count={500}
						color='primary'
						onChange={(event, page) => {
							handleChangePage(event, page)
						}}
					/>
				</Stack>
			</Paper>
		</>
	)
}

export default SelectorPages
