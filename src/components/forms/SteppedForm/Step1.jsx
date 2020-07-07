import React, { useState } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';

const RegisterParentOne = ({ values, step }) => {
	const { nextStep, formData, handleChange } = values;
	const { errors, register} = useForm();

	// Stepping forward
	const forward = (e) => {
		nextStep();
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-lg-6 col-xl-6 mx-auto'>
					<div className='card flex-row my-5'>
						<div className='card-img-left d-none d-md-flex' />
						<div className='card-body'>
							<h5 className='card-title text-center'>Parent One</h5>
							<form className='form-signin'>
								<div className='my-4 form-label-group'>
									<label for='parentOne_firstName'>First Name</label>
									<input
										ref={register({ required: true, minLength: 2 })}
										type='text'
										id='parentOne_firstName'
										className='form-control'
										placeholder='First Name'
										name='parentOne_firstName'
										defaultValue={formData.parentOne_firstName}
										onChange={handleChange}
										required
									/>
								</div>

								<div className='my-4 form-label-group'>
									<label for='parentOne_lastName'>Last Name</label>
									<input
										ref={register({ required: true, minLength: 2 })}
										type='text'
										id='parentOne_lastName'
										className='form-control'
										placeholder='First Name'
										name='parentOne_lastName'
										defaultValue={formData.parentOne_lastName}
										onChange={handleChange}
										required
									/>
								</div>

								<div className='my-4 form-label-group'>
									<label for='parentOne_mobileNumber'>Mobile number</label>
									<input
										ref={register({ required: true })}
										type='number'
										id='parentOne_mobileNumber'
										className='form-control'
										placeholder='Mobile Number'
										name='parentOne_mobileNumber'
										defaultValue={formData.parentOne_mobileNumber}
										onChange={handleChange}
										required
									/>
								</div>
								<div className='d-flex justify-content-end'>
									<button className='btn btn-success' onClick={forward}>
										Next
									</button>
								</div>
								<div class='progress mt-4'>
									<div
										class='bg-success progress-bar progress-bar-animated progress-bar-striped'
										role='progressbar'
										style={{ width: '20%' }}
										aria-valuenow='20'
										aria-valuemin='0'
										aria-valuemax='100'
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterParentOne;
