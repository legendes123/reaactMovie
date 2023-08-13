import React from 'react'
import Slider from '@mui/material-next/Slider'
import { useDispatch } from 'react-redux'
import { fetchYearsFilms } from '../../store/filmsSlices'

const SliderDate = ({ dispatchChangeYears, selectedDate }) => {
	const dispatch = useDispatch()


	function dispatchFetchYearsFilms(firstSliderAge,secondSliderAge){
		const startDate = firstSliderAge + '-01-01'
		const finalDate = secondSliderAge + '-01-01'
		const arDate = [startDate,finalDate]

		dispatch(fetchYearsFilms(arDate))
	}
	return (
		<Slider
			sx={{ mt: '20px', width: '268px', ml: '16px', fontSize: '10px' }}
			size='large'
			value={selectedDate}
			aria-label='Default'
			onChange={(event, newValue) => {
				dispatchChangeYears(event, newValue)
				dispatchFetchYearsFilms(newValue[0],newValue[1])

			}}
			valueLabelDisplay='auto'
			min={1980}
			max={2023}
		/>
	)
}

export default SliderDate
