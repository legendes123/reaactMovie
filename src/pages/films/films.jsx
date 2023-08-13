import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import CardFilms from '../../components/cardFilms/cardFilms'
import { DEFAULT_TYPES_SORT_IMG_URL } from '../../defaultValue/defaultValue'

import { useDispatch, useSelector } from 'react-redux'
import {  fetchPopularFilms } from '../../store/filmsSlices'
import FetchError from '../../error/fetchError'

const Films = () => {
	const films = useSelector((state) => state.films.movies.results)
	const status = useSelector((state) => state.films.status)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchPopularFilms())
	}, [])
	if(status === 'error'){
		return(
			<FetchError></FetchError>
		)
	}

	if(status === 'resolved'){
		return(
			<Grid container spacing={12} sx={{ margin: '0 auto' }}>
				{films &&
					films.map(elem => {
						return (
							<CardFilms
								key={elem.id}
								idFilms={elem.id}
								titleFilm={elem.title}
								posterFilm={`${DEFAULT_TYPES_SORT_IMG_URL}${elem.backdrop_path}`}
								ratingFilm={elem.vote_average}
							></CardFilms>
						)
					})
				}
			</Grid>
		)
	}
}

export default Films
