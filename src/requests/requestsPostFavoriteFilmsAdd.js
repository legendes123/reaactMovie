import { getCookie } from '../utils/getCookie'
import {COOKIES, DEFAULT_SERVER_API, TOKEN} from '../defaultValue/defaultValue'

let token = getCookie(COOKIES.TOKEN)
let accountId = getCookie(COOKIES.ACCOUNT_ID)

export async function requestsPostFavoriteFilmsAdd(movieId) {
	let response = await fetch(
		`${DEFAULT_SERVER_API}3/account/${accountId}/favorite`,
		{
			method: 'POST',
			headers: {
				accept: 'application/json',
				'content-type': 'application/json',
				Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWE1MjFiMzNhNTcxNTM5OGI2ZTdhNGU5MGU0YTNhOCIsInN1YiI6IjY0OThhNjFjYzhmM2M0MDExZDE0YmNjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P1_ySBFFNw3RCoCcQhDtWti4piwpLGv42Ti8y0pIGDk'
			},
			body: JSON.stringify({
				media_type: 'movie',
				media_id: movieId,
				favorite: true
			})
		}
	)
	let data = await response.json()

	return data

}
