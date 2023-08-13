import { defaultValueFilmsRender } from '../defaultValue/defaultValue'
import { createAction, createAsyncThunk, createReducer, createSlice } from '@reduxjs/toolkit'
import { requestsGetSearchFilms } from '../requests/requestsGetSearchFilms'
import { requestsGetFavoriteFilms } from '../requests/requestsGetFavoriteFilms'
import { useDispatch } from 'react-redux'
import { requestsGetPopularFilms } from '../requests/requestsGetPopularFilms'
import { requestsGetTopRaitingFilms } from '../requests/requestsGetTopRatingFilms'
import { requestsGetCategoryFilms } from '../requests/requestsGetCategoryFilms'
import { requestsPostFavoriteFilmsDelete } from '../requests/requestsPostFavoriteFilmsDelete'
import { requestsPostFavoriteFilmsAdd } from '../requests/requestsPostFavoriteFilmsAdd'
import { requestsGetYearsFilms } from '../requests/requestsGetYearsFilms'
import { requestsGetGenresFilms } from '../requests/requestsGetGenresFilms'



const initialState = defaultValueFilmsRender

export const fetchTopRatingFilms = createAsyncThunk(
	'films/fetchTopRatingFilms',
	async function(numberPages = 1){
		const fetchTopRatingFilms = await requestsGetTopRaitingFilms(numberPages)
		return fetchTopRatingFilms
	}
)
export const fetchSearchFilms = createAsyncThunk(
	'films/fetchSearchFilms',
	async function(value, page){
		const fetchSearchFilms = await requestsGetSearchFilms(value, page)
		return fetchSearchFilms
	}
)
export const fetchPopularFilms = createAsyncThunk(
	'films/fetchPopularFilms',
	async function(numberPages){
		const fetchPopularFilms = await requestsGetPopularFilms(numberPages)
		return fetchPopularFilms
	}
)
export const fetchFavoriteFilms = createAsyncThunk(
	'films/fetchFavoriteFilms',
	async function(){
		const fetchFavoriteFilms = await requestsGetFavoriteFilms()
		return fetchFavoriteFilms
	}
)
export const fetchCategoryFilms = createAsyncThunk(
	'films/fetchCategoryFilms',
	async function(){
		const fetchCategoryFilms = await requestsGetCategoryFilms()
		return fetchCategoryFilms
	}
)
export const fetchFavoriteFilmsDelete = createAsyncThunk(
	'films/fetchFavoriteFilmsDelete',
	async function(movieId){
		const favoriteFilmsDelete = await requestsPostFavoriteFilmsDelete(movieId)
	}
)
export const fetchFavoriteFilmsAdd = createAsyncThunk(
	'films/fetchFavoriteFilmsAdd',
	async function(movieId){
		const favoriteFilmsAdd = await requestsPostFavoriteFilmsAdd(movieId)
	}
)
export const fetchYearsFilms = createAsyncThunk(
	'films/fetchYearsFilms',
	async function(arDate){
		const yearsFilms = await requestsGetYearsFilms(arDate)
		return yearsFilms
	}
)
export const fetchGenresFilms = createAsyncThunk(
	'films/fetchGenresFilms',
	async function(encodeGenresId){
		const genresFilms = await requestsGetGenresFilms(encodeGenresId)
		return genresFilms
	}
)


const filmsSlice = createSlice({
	name: "films",
	initialState: initialState,
	reducers: {
		changeFilmsRender(state, action) {
			state.movies = action.payload
		},
	},
	extraReducers:{
		[fetchSearchFilms.fulfilled]:(state,action)=>{
			state.movies = action.payload
			state.status = 'resolved'

		},
		[fetchSearchFilms.rejected]:(state,action)=>{
			state.status = 'error'
		},
		[fetchPopularFilms.fulfilled]:(state,action)=>{
			state.movies = action.payload
			state.status = 'resolved'
		},
		[fetchPopularFilms.rejected]:(state,action)=>{
			state.status = 'error'
		},
		[fetchFavoriteFilms.fulfilled]:(state,action)=>{
			state.favoriteFilms = action.payload
			state.status = 'resolved'

		},
		[fetchFavoriteFilms.rejected]:(state,action)=>{
			state.status = 'error'
		},
		[fetchTopRatingFilms.fulfilled]:(state,action)=>{
			state.movies = action.payload
			state.status = 'resolved'

		},
		[fetchTopRatingFilms.rejected]:(state,action)=>{
			state.status = 'error'
		},
		[fetchCategoryFilms.fulfilled]:(state,action)=>{
			let newArray = []
			action.payload.forEach((elem)=>{
				newArray.push({
					id:elem.id,
					label:elem.name
				})

			})
			state.category = newArray
			state.status = 'resolved'
		},
		[fetchCategoryFilms.rejected]:(state,action)=>{
			state.status = 'error'
		},

		[fetchFavoriteFilmsDelete.fulfilled]:(state,action)=>{
			state.favoriteFilms = action.payload
			state.status = 'resolved'

		},
		[fetchFavoriteFilmsDelete.rejected]:(state,action)=>{
			state.status = 'error'
		},
		[fetchFavoriteFilmsAdd.fulfilled]:(state,action)=>{
			state.favoriteFilms.results.push(action.payload)
			state.status = 'resolved'

		},
		[fetchFavoriteFilmsAdd.rejected]:(state,action)=>{
			state.status = 'error'
		},
		[fetchYearsFilms.fulfilled]:(state,action)=>{
			state.movies = action.payload
			state.status = 'resolved'

		},
		[fetchYearsFilms.rejected]:(state,action)=>{
			state.status = 'error'
		},
		[fetchGenresFilms.fulfilled]:(state,action)=>{
			state.movies = action.payload
			state.status = 'resolved'

		},
		[fetchGenresFilms.rejected]:(state,action)=>{
			state.status = 'error'
		},
	}
});

export const { changeFilmsRender } = filmsSlice.actions;
export default filmsSlice.reducer;
