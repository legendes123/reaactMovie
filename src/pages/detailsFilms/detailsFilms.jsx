import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Header from '../../components/header/header'
import { Box, CardMedia, Grid, Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link, useLoaderData } from 'react-router-dom'
import { requestsGetDetailsFilms } from '../../requests/requestsGetDetailsFilms'

import {
	DEFAULT_TYPES_SORT_IMG_URL,
	DETAILS_TITLE
} from '../../defaultValue/defaultValue'
import ListDetails from '../../components/listDetails/listDetails'
import IconFavorites from '../../components/iconFavorites/iconFavorites'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFavoriteFilmsAdd } from '../../store/filmsSlices'


export async function loader({ params }) {
	const filmsId = params.filmId.substring(1)
	const film = await requestsGetDetailsFilms(filmsId)
	return film
}

const DetailsFilms = () => {
	const favoriteFilms = useSelector((state) => state.films.favoriteFilms)
	const dispatch = useDispatch()

	const film = useLoaderData()
	const detailsValue = [
		film.production_countries[0].iso_3166_1,
		film.release_date,
		film.genres[0].name + ' ' + film.genres[1].name,
		film.budget,
		`${128} минут`,
		film.vote_average
	]

	const [isFavoriteFilms, setIsFavoriteFilms] = useState(false)

	useEffect(() => {

		async function getFavoriteFilms() {
			if(favoriteFilms.results.some(movie => movie.id === film.id)){
				setIsFavoriteFilms(true)
			}else{
				setIsFavoriteFilms(false)
			}
		}
		getFavoriteFilms()
	}, [])
	async function handleChangeFavoriteStatus(movieStatus) {
		setIsFavoriteFilms(movieStatus)
		if (isFavoriteFilms) {
			dispatch(fetchFavoriteFilmsAdd(film.id))
		}
		if (!isFavoriteFilms) {
			dispatch(fetchFavoriteFilmsAdd(film.id))
		}
	}
	return (
		<>
			<Box>
				<Header titleFilms={film.title}></Header>
				<Card
					sx={{
						display: 'flex',
						maxWidth: 1200,
						padding: '30px',
						justifyContent: 'centre'
					}}
				>
					<CardMedia
						component='img'
						sx={{ width: 500 }}
						image={`${DEFAULT_TYPES_SORT_IMG_URL}${film.poster_path}`}
						alt='Live from space album cover'
					/>
					<Box
						sx={{ display: 'flex', flexDirection: 'column', padding: '20px' }}
					>
						<CardContent>
							<Box sx={{ display: 'flex' }}>
								<Typography variant='h3'>{film.title}</Typography>
								<IconFavorites
									isFavoriteFilms={isFavoriteFilms}
									handleChangeFavoriteStatus={handleChangeFavoriteStatus}
								></IconFavorites>
							</Box>
							<Link to={'/'} style={{ color: 'black' }}>
								<ArrowBackIcon></ArrowBackIcon>
							</Link>
						</CardContent>

						<CardContent>
							<Typography variant='h6'>{film.overview}</Typography>
						</CardContent>

						<CardContent sx={{ flex: '1 0 auto' }}>
							<Typography variant='h3'>Детали</Typography>
							<Grid container spacing={2}>
								<ListDetails listElem={DETAILS_TITLE}></ListDetails>
								<ListDetails listElem={detailsValue}></ListDetails>
							</Grid>
						</CardContent>
					</Box>
				</Card>
			</Box>
		</>
	)
}

export default DetailsFilms
