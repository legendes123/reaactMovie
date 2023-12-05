import React, { useEffect, useState } from 'react'
import { Box, Button, FormControl, Typography } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import SendIcon from '@mui/icons-material/Send'
import TokenIcon from '@mui/icons-material/Token'
import { useCookies } from 'react-cookie'
import InputForm from '../inputForm/inputForm'
import { COOKIES } from '../../defaultValue/defaultValue'
import { useDispatch, useSelector } from 'react-redux'
import {
	changeStatusReg,
	changeToken,
	fetchAccountId
} from '../../store/userSlices'
import FetchError from '../../error/fetchError'

const ModalRegistration = ({ titleRegistration }) => {
	const dispatch = useDispatch()
	const [cookies, setCookie] = useCookies(['token'])
	const [emailValue, setEmailValue] = useState('')
	const [emailPassword, setPasswordValue] = useState('')
	const [tokenValue, setTokenValue] = useState('')
	const accountIdStatus = useSelector(state => state.users.status)

	function saveTokenCookie(token) {
		setCookie(COOKIES.TOKEN, token, { path: '/' })
	}

	useEffect(() => {
		dispatch(fetchAccountId())
	}, [])

	if (accountIdStatus === 'error') {
		return <FetchError></FetchError>
	}
	if (accountIdStatus === 'resolved') {
		return (
			<Box
				sx={{
					width: 550,
					height: 500,
					backgroundColor: '#573b8a',
					borderRadius: '10px',
					overflow: 'hidden',
					boxShadow: '5px 20px 50px #000',
					position: 'absolute',
					zIndex: 1000,
					left: ' 35%',
					top: '25%'
				}}
			>
				<Box
					sx={{
						height: '470px',
						background: '#eee',
						borderRadius: '60% / 10%'
					}}
				>
					<FormControl
						sx={{ display: 'flex', justifyContent: 'spaceBetween' }}
						onSubmit={() => {}}
					>
						<Typography
							sx={{
								color: '#573b8a',
								fontSize: '2.3em',
								marginTop: '30px',
								textAlign: 'center',
								mt: '100px'
							}}
						>
							{titleRegistration}
						</Typography>
						<InputForm
							label='Email'
							Icon={AccountCircle}
							changeData={setEmailValue}
						></InputForm>
						<InputForm
							label='Password'
							Icon={LockOpenIcon}
							changeData={setPasswordValue}
						></InputForm>
						<Button
							variant='outlined'
							type='submit'
							startIcon={<SendIcon />}
							sx={{
								width: 350,
								height: 40,
								display: 'flex',
								mr: 'auto',
								ml: 'auto',
								mt: '10px'
							}}
							onClick={() => {
								saveTokenCookie(tokenValue)
								dispatch(changeToken(tokenValue))
								dispatch(changeStatusReg())
							}}
						>
							Send
						</Button>
					</FormControl>
				</Box>
			</Box>
		)
	}
}
export default ModalRegistration
