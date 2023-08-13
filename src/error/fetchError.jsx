import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import { Alert } from '@mui/lab'
import { Backdrop, Box } from '@mui/material'


const FetchError = () => {

	return(
		<Backdrop open='open'>
			<Box
				sx={{
					position: 'absolute',
					width: '400px',
					height: '200px',
					top: '40%',
					left: '40%',
					backgroundColor: '#9799a1'
				}}
			>
				<ClearIcon
					color='black'
				></ClearIcon>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<Alert variant='outlined' severity='error'>
					This is an error alert — check it out!
				</Alert>
			</Box>
		</Backdrop>
	)
}

export default FetchError
