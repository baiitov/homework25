import loginSlice from './reducers/uiLogin'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		uiSlice: loginSlice.reducer,
	},
})
export default store
