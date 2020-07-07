import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const LoginCard = () => {
	// Form validation requirements
	const { errors, register, handleSubmit } = useForm();

	const [
		notRegistered,
		setNotRegistered,
	] = useState('');

	const handleLogin = (data) => {
		console.log(data);
		axios
			.post('http://localhost:5000/user/login', { 'Access-Control-Allow-Origin': '*' }, data)
			.then((response) => setNotRegistered(response.data))
			.catch((error) => console.log(error));
		setNotRegistered('');
	};

	function EmailError (){
		if (notRegistered === 'email') {
			return (
				<div>
					<small className='text-danger ml-2'>
						Email incorrect
						<Link className='mx-2' to='/login'>
							Register instead?
						</Link>
					</small>
				</div>
			);
		}
		else {
			return null;
		}
	}

	function PasswordError (){
		if (notRegistered === 'password') {
			return (
				<div>
					<small className='text-danger'>Password incorrect</small>
				</div>
			);
		}
		else {
			return null;
		}
	}

	console.log(notRegistered);

	return (
		<div id='registerform' className='d-flex align-items-center justify-content-center'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 col-xl-6 mx-auto'>
						<div className='card flex-row my-5'>
							<div className='card-img-left d-none d-md-flex' />
							<div className='card-body'>
								<h5 className='card-title text-center'>Login</h5>
								<form onSubmit={handleSubmit(handleLogin)} className='form-signin'>
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
										{/* Displaying errors */}
										<div className='mt-2 text-danger'>{errors.email && errors.email.message}</div>
										<EmailError />
									</div>
									<div className='my-3 form-label-group'>
										<label htmlFor='password'>Password</label>
										<input
											ref={register({
												required : 'Please enter a password',
											})}
											name='password'
											type='password'
											id='inputPassword'
											className='form-control'
											placeholder='Password'
										/>
										<div className='mt-2 text-danger'>
											<PasswordError />
											{errors.password && errors.password.message}
										</div>
									</div>

									{/* Start of Login and register button */}
									<button type='submit' className='btn btn-block btn-success text-uppercase'>
										Sign In
									</button>
									<Link
										to='/login'
										className='text-black btn btn-block btn-outline-secondary text-uppercase'>
										Register Instead
									</Link>
									<hr className='my-3' />
									<button className='btn btn-block btn-google text-uppercase my-2'>
										<i className='fa fa-google mr-2' aria-hidden='true' />
										Sign in with Google
									</button>
									<button className='btn btn-block btn-facebook text-uppercase'>
										<i className='mr-2 fa fa-facebook-official' aria-hidden='true' />
										Sign in with Facebook
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

export default LoginCard;
