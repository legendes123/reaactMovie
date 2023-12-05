import { getCookie } from '../utils/getCookie'
import {COOKIES, DEFAULT_SERVER_API, TOKEN} from '../defaultValue/defaultValue'

let token = getCookie(COOKIES.TOKEN)
let accountId = getCookie('account_id')

let options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWE1MjFiMzNhNTcxNTM5OGI2ZTdhNGU5MGU0YTNhOCIsInN1YiI6IjY0OThhNjFjYzhmM2M0MDExZDE0YmNjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P1_ySBFFNw3RCoCcQhDtWti4piwpLGv42Ti8y0pIGDk'
	}
}

export async function requestsGetFavoriteFilms() {
	let response = await fetch(
		`${DEFAULT_SERVER_API}3/account/${accountId}/favorite/movies`,
		options
	)
	let data = await response.json()
	return data

}
