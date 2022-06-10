import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionsLogin } from '../store/reducers/uiLogin'
import LoadingSpinner from '../UI/LoadingSpinner'
import './Login.css'
const Login = () => {
	const [email, setEmail] = useState('')
	const [isEmail, setIsEmail] = useState(true)
	const [password, setPassword] = useState('')
	const [isPassword, setIsPassword] = useState(true)
	const { loading, isShow } = useSelector((state) => state.uiSlice)
	const dispatch = useDispatch()
	const emailHandler = (e) => {
		setEmail(e.target.value)
	}

	const passwordHandler = (e) => {
		setPassword(e.target.value)
	}
	const submitHandler = (e) => {
		e.preventDefault()
		if (email.trim() === '' && password.trim() === '') {
			setIsEmail(false)
			setIsPassword(false)
			return
		}
		setIsEmail(true)
		setIsPassword(true)
		dispatch(actionsLogin.loginHandler())
	}
	useEffect(() => {
		setTimeout(() => {
			dispatch(actionsLogin.loadingHandler())
			return
		}, [3000])
		if (loading) {
			setTimeout(() => {
				dispatch(actionsLogin.ShotHandler())
			}, [3000])
		}
	}, [loading, isShow])

	return (
		<form className='forma' onSubmit={submitHandler}>
			<div className='block'>
				<input
					name='email'
					className={isEmail ? 'email' : 'invalid'}
					onChange={emailHandler}
					type='text'
				/>
			</div>
			<div className='block2'>
				<input
					onChange={passwordHandler}
					className={isPassword ? 'password' : 'passInvalid'}
					type='password'
				/>
			</div>

			<div>
				<button className='btn'>login</button>
			</div>

			{loading && <LoadingSpinner />}
		</form>
	)
}

export default Login
