import React from 'react';

const SimpleRegisterForm = () => {
	return (
		<div>
			<div className='row'>
				<div className='col-3' />
				<div className='col-6'>
					<form action=''>
						<div className='form-group row'>
							<label className='col-sm-4 col-form-label' htmlFor='email'>
								Email
							</label>
							<div className='col-8'>
								<input type='text' name='email' required id='email' className='form-control' />
							</div>
						</div>
						<div className='form-group row'>
							<label className='col-sm-4 col-form-label' htmlFor='password'>
								Password
							</label>
							<div className='col-8'>
								<input
									type='password'
									required
									name='password'
									id='password'
									className='form-control'
								/>
							</div>
						</div>
						<div className='form-group row'>
							<label className='col-sm-4 col-form-label' htmlFor='confirm_password'>
								Confirm Password
							</label>
							<div className='col-8'>
								<input
									type='password'
									name='confirm_password'
									id='confirm_password'
									className='form-control'
									required
								/>
							</div>
						</div>
						<button className='btn btn-danger mr-4'>Register</button>
						<a href='#!'>Login instead?</a>
						<div className='row d-flex justify-content-center'>
							<button className='m-2 rounded btn btn-google text-uppercase' type='submit'>
								<i class='fa fa-google mr-2' aria-hidden='true' />
								Sign Up with Google
							</button>
							<button class='m-2 rounded btn btn-facebook text-uppercase' type='submit'>
								<i className='mr-2 fa fa-facebook-official' aria-hidden='true' />
								Sign up with Facebook
							</button>
						</div>
					</form>
				</div>
				<div className='col-3' />
			</div>
		</div>
	);
};

export default SimpleRegisterForm;
