
export const DEFAULT_TYPES_USER_DATA = {
	CHANGE_USER_TOKEN: 'change_token'
}

export const DEFAULT_TYPES_SORT = {
	POPULARITY: 'По полярности',
	RATING: 'По рейтигу'
}
export const DETAILS_TITLE = [
	'Страна',
	'Год',
	'Жанр',
	'Бюджет',
	'Время',
	'Рейтинг'
]
export const COOKIES = {
	TOKEN: 'token',
	ACCOUNT_ID: 'account_id'
}
export const DEFAULT_TYPES_SORT_IMG_URL = 'https://image.tmdb.org/t/p/w500'
export const DEFAULT_SERVER_API = 'https://api.themoviedb.org/'
export const SERVER_API_PARAMS = {
	SEARCH_BY_NAME: '3/search/movie?include_adult=true&language=ru&page=',
	GENRES: '3/genre/movie/list?language=ru',
	TOP_RATED_LIST: '3/movie/top_rated?language=ru&page=',
	POPULAR_LIST: '3/movie/popular?language=ru&page=',
	ACCOUNT_ID: '3/account/account_id',
	SEARCH: '3/search/movie?query='
}
export const defaultValueFilmsRender = {
	movies: {},
	favoriteFilms:{},
	category:[],
	status: 'loading'
}
export const selectTypeSort = [
	{ label: 'По годам', id: 1 },
	{ label: 'По полярности', id: 2 },
	{ label: 'По рейтигу', id: 3 }
]
