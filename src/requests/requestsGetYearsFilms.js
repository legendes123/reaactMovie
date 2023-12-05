import { getCookie } from '../utils/getCookie'
import {
	COOKIES,
	DEFAULT_SERVER_API,
	SERVER_API_PARAMS, TOKEN
} from '../defaultValue/defaultValue'

let token = getCookie(COOKIES.TOKEN)
let options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWE1MjFiMzNhNTcxNTM5OGI2ZTdhNGU5MGU0YTNhOCIsInN1YiI6IjY0OThhNjFjYzhmM2M0MDExZDE0YmNjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P1_ySBFFNw3RCoCcQhDtWti4piwpLGv42Ti8y0pIGDk'
	}
}

export async function requestsGetYearsFilms(arDate) {
	const firstSliderAge = arDate[0]
	const secondSliderAge = arDate[1]

	let response = await fetch(
		`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=${firstSliderAge}&primary_release_date.lte=${secondSliderAge}&sort_by=popularity.desc`,
		options
	)
	let data = await response.json()
	return data
}
