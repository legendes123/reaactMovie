import React, { memo, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Search from '../../components/search/search'
import ComboBox from '../../components/comboBox/comboBox'
import SliderDate from '../../components/sliderDate/sliderDate'
import {
	DEFAULT_TYPES_SORT,
	selectTypeSort
} from '../../defaultValue/defaultValue'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory, changeSort, changeYear, filtersClear } from '../../store/filtersSlices'
import { fetchCategoryFilms, fetchGenresFilms, fetchPopularFilms, fetchTopRatingFilms } from '../../store/filmsSlices'

const Filtries = memo(function Filtries() {
	const filtries = useSelector((state) => state.filters)
	const dispatch = useDispatch()
	const category = useSelector((state) => state.films.category)
	const store = useSelector((state) => state)


	useEffect(() => {
		dispatch(fetchCategoryFilms())
	}, [])

	useEffect(() => {
		async function changeFilmsSort (){
			switch (filtries.selectSort) {
				case DEFAULT_TYPES_SORT.POPULARITY: {
					dispatch(fetchPopularFilms())
					break
				}
				case DEFAULT_TYPES_SORT.RATING: {
					dispatch(fetchTopRatingFilms())
					break
				}
			}
		}
		changeFilmsSort()
	}, [filtries.selectSort])




	function handleChangeFiltriesCategory(event, newValue){
		const arrayIdFilms  = newValue.map((elem)=>{
			return elem.id
		}).toString()
		const arrayIdFilmsEncode = encodeURIComponent(arrayIdFilms)
		dispatch(fetchGenresFilms(arrayIdFilmsEncode))

		dispatch(changeCategory(newValue.map(elem => {
			return elem.label
		})))
	}
	function handleClearFiltries(){
		dispatch(filtersClear())
	}
	function handleChangeFiltriesYears(event, newValue){
		dispatch(changeYear([newValue[0],newValue[1]]))
	}
	function handleChangeFiltriesTypeSort(event, newValue){
		dispatch(changeSort(newValue.label))

	}

	return (
		<Box sx={{ padding: '10px' }}>
			<Box sx={{ display: 'flex' }}>
				<Typography variant='h6' component='h6'>
					Фильтры
				</Typography>
				<CloseIcon
					onClick={handleClearFiltries}
					sx={{ flexGrow: 1 }}
				></CloseIcon>
			</Box>
			<Search></Search>
			<Box>
				<Typography
					variant='h6'
					component='h6'
					sx={{ textAlign: 'left', mt: '15px' }}
				>
					Сортировать по:
				</Typography>
				<ComboBox
					multiple={false}
					options={selectTypeSort}
					disableCloseOnSelect={false}
					dispatchFiltries={(event, newValue) => {
						handleChangeFiltriesTypeSort(event, newValue)
					}}
				></ComboBox>
			</Box>
			<Box sx={{ display: 'flex' }}>
				<Typography
					variant='h6'
					component='h6'
					sx={{ textAlign: 'left', mt: '15px' }}
				>
					Год релиза:
				</Typography>
				<SliderDate
					selectedDate={filtries.selectYear}
					dispatchChangeYears={(event, newValue) => {
						handleChangeFiltriesYears(event, newValue)
					}}
				></SliderDate>
			</Box>
			<Box>
				<Typography
					variant='h6'
					component='h6'
					sx={{ textAlign: 'left', mt: '15px' }}
				>
					Жанры
				</Typography>
				<ComboBox
					multiple={true}
					options={category}
					disableCloseOnSelect={true}
					dispatchFiltries={(event, newValue) => {
						handleChangeFiltriesCategory(event, newValue)
					}}
				></ComboBox>
			</Box>
		</Box>
	)
})

export default Filtries
