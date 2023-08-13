import React, { useEffect } from 'react'
import Header from '../../components/header/header'
import NavBar from '../navBar/navBar'
import { Box } from '@mui/material'
import Films from '../films/films'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFavoriteFilms } from '../../store/filmsSlices'
import ModalRegistration from '../../components/modalRegistration/modalRegistration'


const Content = () => {
	const [cookies, setCookie] = useCookies(['token'])
	const dispatch = useDispatch()
	const isReg = useSelector((state) => state.users.isReg)

	useEffect(() => {
		dispatch(fetchFavoriteFilms())
	}, [])

	if(!isReg){
		return (
			<>
				<Header />
				<ModalRegistration/>
			</>
		)
	}
	if(isReg){
		return (
			<>
				<Header />
				<Box sx={{ display: 'flex' }}>
					<NavBar />
					<Films></Films>
				</Box>
			</>
		)
	}

}

export default Content
