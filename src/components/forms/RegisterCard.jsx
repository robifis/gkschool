import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const RegisterCard = () => {
	// Form validation requirements
	const { watch, errors, register, handleSubmit } = useForm();

	const [
		isRegistered,
		setIsRegistered,
	] = useState('');

	function Uservalidation (){
		if (isRegistered !== '') {
			return (
				<div>
					<p>{isRegistered}</p>
				</div>
			);
		}
		else {
			return null;
		}
	}

	const handleRegister = (data, e) => {
		axios
			.post('http://localhost:5000/user/register', data)
			.then((response) => setIsRegistered(response.data))
			.catch((error) => {
				console.log(error);
			});
		setIsRegistered('');
	};

	function Uservalidation (){
		if (isRegistered !== '') {
			return (
				<div>
					<small>
						{isRegistered}
						<Link to='/login' className='mx-2 text-dark'>
							Login Instead?
						</Link>
					</small>
				</div>
			);
		}
		else {
			return null;
		}
	}

	return (
		<div id='registerform' className='d-flex align-items-center justify-content-center'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 col-xl-6 mx-auto'>
						<div className='card flex-row my-5'>
							<div className='card-img-left d-none d-md-flex' />
							<div className='card-body'>
								<h5 className='card-title text-center'>Register</h5>
								<form className='form-signin' onSubmit={handleSubmit(handleRegister)}>
									<div className='my-3 form-label-group'>
										<label htmlFor='email'>Email address</label>
										<input
											name='email'
											ref={register({
												required : 'Please enter a email address',
											})}
											type='email'
											id='email'
											className='form-control'
											placeholder='Email address'
										/>
										<div className='mt-2 text-danger'>
											<Uservalidation />
											{errors.email && errors.email.message}
										</div>
									</div>

									<hr />

									<div className='my-3 form-label-group'>
										<label htmlFor='inputPassword'>Password</label>
										<input
											name='password'
											ref={register({
												required  : 'Please enter a password',
												minLength : {
													value   : 8,
													message : 'Password is too short',
												},
											})}
											type='password'
											id='inputPassword'
											className='form-control'
											placeholder='Password'
										/>
										<small id='passwordHelpBlock' className='form-text text-muted'>
											Your password must be at least 8 characters long
										</small>
										<div className='mt-2 text-danger'>
											{errors.password && errors.password.message}
										</div>
									</div>

									<div className='my-3 form-label-group'>
										<label htmlFor='confirmPassword'>Confirm password</label>
										<input
											name='confirm_password'
											ref={register({
												required : 'Please enter a password',
												validate : (value) => {
													return value === watch('password');
												},
											})}
											type='password'
											id='confirmPassword'
											className='form-control'
											placeholder='Confirm password'
										/>
										<div className='mt-2 text-danger'>
											{errors.confirm_password && errors.confirm_password.message}
											{errors.confirm_password &&
											errors.confirm_password.type === 'validate' && (
												<span>Password doesn't match!</span>
											)}
										</div>
									</div>
									<hr />
									<button
										type='submit'
										className='btn btn-success text-white text-uppercase btn-block'
										to='/register'>
										Register
									</button>
									<Link
										to='/login'
										className='text-black btn btn-block btn-outline-secondary text-uppercase'>
										Sign In Instead
									</Link>
									<hr className='my-3' />
									<button className='btn btn-block btn-google text-uppercase my-2'>
										<i className='fa fa-google mr-2' aria-hidden='true' />
										Sign up with Google
									</button>
									<button className='btn btn-block btn-facebook text-uppercase'>
										<i className='mr-2 fa fa-facebook-official' aria-hidden='true' />
										Sign up with Facebook
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterCard;
