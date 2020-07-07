import React from 'react';
import { useForm } from 'react-hook-form';

const NextOfKin = ({ values }) => {
	const { nextStep, prevStep, formData, handleChange } = values;
	const { errors, register } = useForm();

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
									<h5 className='card-title text-center'>Next of Kin</h5>
									<form className='form-signin'>
										<div className=' my-4 form-label-group'>
											<label for='nextOfKin_firstName'>First Name</label>
											<input
												ref={register({ required: true, minLength: 2 })}
												type='text'
												id='nextOfKin_firstName'
												className='form-control'
												placeholder='First Name'
												name='nextOfKin_firstName'
												defaultValue={formData.nextOfKin_firstName}
												onChange={handleChange}
												required
											/>
										</div>

										<div className='my-4 form-label-group'>
											<label for='nextOfKin_lastName'>Last Name</label>
											<input
												ref={register({ required: true, minLength: 2 })}
												type='text'
												id='nextOfKin_lastName'
												className='form-control'
												placeholder='First Name'
												name='nextOfKin_lastName'
												defaultValue={formData.nextOfKin_lastName}
												onChange={handleChange}
												required
											/>
										</div>

										<div className='my-4 form-label-group'>
											<label for='nextOfKin_mobileNumber'>Mobile number</label>
											<input
												ref={register({ required: true })}
												type='number'
												id='nextOfKin_mobileNumber'
												className='form-control'
												placeholder='Mobile Number'
												name='nextOfKin_mobileNumber'
												defaultValue={formData.nextOfKin_mobileNumber}
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
												class='bg-success progress-bar progress-bar-animated progress-bar-striped'
												role='progressbar'
												style={{ width: '60%' }}
												aria-valuenow='60'
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

export default NextOfKin;
