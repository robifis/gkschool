import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterParentTwo = ({ values }) => {
	const { nextStep, prevStep, formData, handleChange } = values;
	const { errors, register } = useForm();
	// Stepping forward
	const forward = (e) => {
		nextStep();
	};
	const backward = (e) => {
		prevStep();
	};
	return (
		<div>
			<div>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 col-xl-6 mx-auto'>
							<div className='card flex-row my-5'>
								<div className='card-img-left d-none d-md-flex' />
								<div className='card-body'>
									<h5 className='card-title text-center'>Parent Two</h5>
									<form className='form-signin'>
										<div className=' my-4 form-label-group'>
											<label for='parentTwo_firstName'>First Name</label>
											<input
												ref={register({ required: true, minLength: 2 })}
												type='text'
												id='parentTwo_firstName'
												className='form-control'
												placeholder='First Name'
												name='parentTwo_firstName'
												defaultValue={formData.parentTwo_firstName}
												onChange={handleChange}
												required
											/>
										</div>

										<div className='my-4 form-label-group'>
											<label for='parentTwo_lastName'>Last Name</label>
											<input
												ref={register({ required: true, minLength: 2 })}
												type='text'
												id='parentTwo_lastName'
												className='form-control'
												placeholder='First Name'
												name='parentTwo_lastName'
												defaultValue={formData.parentTwo_lastName}
												onChange={handleChange}
												required
											/>
										</div>

										<div className='my-4 form-label-group'>
											<label for='parentTwo_mobileNumber'>Mobile number</label>
											<input
												ref={register({ required: true })}
												type='number'
												id='parentTwo_mobileNumber'
												className='form-control'
												placeholder='Mobile Number'
												name='parentTwo_mobileNumber'
												defaultValue={formData.parentTwo_mobileNumber}
												onChange={handleChange}
												required
											/>
										</div>
										<div className='d-flex justify-content-end'>
											<div className='d-flex justify-content-end'>
												<button className='btn btn-danger mr-2' onClick={backward}>
													Prev
												</button>
											</div>
											<button className='btn btn-success' onClick={forward}>
												Next
											</button>
										</div>
										<div class='progress mt-4'>
											<div
												className='bg-success progress-bar progress-bar-animated progress-bar-striped'
												role='progressbar'
												style={{ width: '40%' }}
												aria-valuenow='40'
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
			</div>
		</div>
	);
};

export default RegisterParentTwo;
