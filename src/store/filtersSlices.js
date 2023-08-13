import { createAction, createReducer, createSlice } from '@reduxjs/toolkit'

const initialState = {
	selectSort: 'По полярности',
	selectYear: [1980, 2023],
	category: []
}

// export function filtersReducer(state = initialState, action) {
// 	switch (action.type) {
// 		case 'select_sort': {
// 			return {
// 				...state,
// 				selectSort: action.selectSort
// 			}
// 		}
// 		case 'select_year': {
// 			return {
// 				...state,
// 				selectYear: [action.selectYearStart, action.selectYearEnd]
// 			}
// 		}
// 		case 'select_category': {
// 			return {
// 				...state,
// 				category: [action.category]
// 			}
// 		}
// 		case 'filters_clear': {
// 			return {
// 				...state,
// 				selectSort: '',
// 				selectYear: [1980, 2023],
// 				category: []
// 			}
// 		}
// 		case 'unselected_category': {
// 			return {
// 				...state,
// 				category: state.category.filter(
// 					elem => elem !== action.unselectedCategory
// 				)
// 			}
// 		}
//
// 		default: {
// 			return state
// 		}
// 	}
// }



// const selectSort = createAction("select_sort");
// const selectYear = createAction("select_year");
// const selectCategory = createAction("select_category");
// const filtersClear = createAction("filters_clear");
// const unselectedCategory = createAction("unselected_category");

// export const filtersReducer = createReducer(initialState, (builder) => {
// 	builder
// 		.addCase(selectSort, (state, action) => {
// 				state.selectSort = action.selectSort
// 		})
// 		.addCase(selectYear, (state, action) => {
// 				state.selectYear = [action.selectYearStart, action.selectYearEnd]
// 		})
// 		.addCase(selectCategory, (state, action) => {
// 			state.category = [action.category]
// 		})
// 		.addCase(filtersClear, (state, action) => {
// 				state.selectSort= '',
// 				state.selectYear = [1980, 2023],
// 				state.category = []
// 		})
// 		.addCase(unselectedCategory, (state, action) => {
// 			state.category = state.category.filter(
// 				elem => elem !== action.unselectedCategory
// 			)
// 		})
// 		.addDefaultCase((state, action) => {
// 			return state
// 		})
//
// })
const filtersSlice = createSlice({
	name: "filters",
	initialState: initialState,
	reducers: {
		changeSort(state, action) {
			state.selectSort = action.payload
		},
		changeYear(state, action) {
			// state.selectYear = [action.selectYearStart, action.selectYearEnd]
			state.selectYear = action.payload
		},
		changeCategory(state, action) {
			state.category = [action.payload]
		},
		filtersClear(state) {
			state.selectSort= '',
				state.selectYear = [1980, 2023],
				state.category = []
		},
		unselectedCategory(state, action) {
			state.category = state.category.filter(
				elem => elem !== action.unselectedCategory
			)
		},
	},
});

export const { changeSort,changeYear,changeCategory,filtersClear,unselectedCategory } = filtersSlice.actions;
export default filtersSlice.reducer;
