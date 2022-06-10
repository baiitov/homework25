import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	loading: false,
	isShow: false,
}
export const loginSlice = createSlice({
	name: 'login',
	initialState: initialState,
	reducers: {
		loginHandler(state, action) {
			state.loading = true
		},
		loadingHandler(state, action) {
			state.loading = false
		},
		ShotHandler(state, action) {
			state.isShow = true
			localStorage.setItem('add', 1)
		},
		ShowIsHandler(state, action) {
			state.isShow = false
      localStorage.removeItem('add')
		},
	},
})
export const actionsLogin = loginSlice.actions
export default loginSlice
