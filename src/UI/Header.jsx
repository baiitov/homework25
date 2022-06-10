import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { actionsLogin } from '../store/reducers/uiLogin'
import './Header.css'
import LoadingSpinner from './LoadingSpinner'
const Header = () => {
	const { loading, isShow } = useSelector((state) => state.uiSlice)

	const dispatch = useDispatch()

	const isShowHandler = () => {
		dispatch(actionsLogin.loginHandler())

		if (loading) {

			setTimeout(() => {
				dispatch(actionsLogin.loadingHandler())
				return
			}, [2000])
		} else if(!loading){
			setTimeout(() => {
				dispatch(actionsLogin.ShowIsHandler())
			}, [3000])
		}
	}

	return (
		<header className='headers'>
			<div>
				<button className='btn' onClick={isShowHandler}>
					выйти
				</button>
			</div>
			{loading && <LoadingSpinner />}
		</header>
	)
}

export default Header
