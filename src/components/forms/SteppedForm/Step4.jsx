import React from 'react';
import { useForm } from 'react-hook-form';

const ChildInfo = ({ values }) => {
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
									<h5 className='card-title text-center'>Child Info</h5>
									<form className='form-signin'>
										<div className=' my-3 form-label-group'>
											<label for='child_firstName'>First Name</label>
											<input
												ref={register({ required: true, minLength: 2 })}
												type='text'
												id='child_firstName'
												className='form-control'
												placeholder='First Name'
												name='child_firstName'
												defaultValue={formData.child_firstName}
												onChange={handleChange}
												required
											/>
										</div>

										<div className='my-3 form-label-group'>
											<label for='child_lastName'>Last Name</label>
											<input
												ref={register({ required: true, minLength: 2 })}
												type='text'
												id='child_lastName'
												className='form-control'
												placeholder='First Name'
												name='child_lastName'
												defaultValue={formData.child_lastName}
												onChange={handleChange}
												required
											/>
										</div>

										<div className='my-3 form-label-group'>
											<label for='child_mobileNumber'>Date of Birth</label>
											<input
												type='date'
												value={formData.child_dateOfBirth}
												name='child_dateOfBirth'
												className='form-control'
												onChange={handleChange}
												ref={register({ required: true })}
											/>
										</div>
										<div className='my-3 form-label-group'>
											<label for='allergies'>Allergies</label>
											<input
												ref={register({ required: true })}
												type='text'
												name='allergies'
												className='form-control'
												placeholder='Allergies'
												value={formData.allergies}
												onChange={handleChange}
											/>
										</div>
										<div className='my-3 form-label-group'>
											<label for='medication'>Medication</label>
											<input
												ref={register({ required: true })}
												type='text'
												name='medication'
												id='medication'
												className='form-control'
												placeholder='Medication'
												value={formData.medication}
												onChange={handleChange}
											/>
										</div>
										<div className='my-3 form-label-group'>
											<label for='disabilities'>Disabilities</label>
											<input
												ref={register({ required: true })}
												type='text'
												name='disabilities'
												id='disabilities'
												className='form-control'
												placeholder='disabilities'
												value={formData.disabilities}
												onChange={handleChange}
											/>
										</div>
										<div className='my-3 form-label-group'>
											<label for='other'>Other Information</label>
											<textarea
												ref={register({ required: true })}
												rows='4'
												type='text'
												as='textarea'
												name='other'
												id='other'
												className='form-control'
												placeholder='Other info'
												value={formData.other}
												onChange={handleChange}
											/>
										</div>
										<div className='my-3 form-label-group'>
											<label className='mr-2' for='videoConsent'>
												I herby consent to my son/daughter being filmed during training
												sessions.
											</label>
											<input
												id='videoConsent'
												ref={register({ required: true })}
												defaultValue={formData.videoConsent}
												onChange={handleChange}
												type='checkbox'
												label='I herby consent to my son/daughter being filmed during training sessions.'
											/>
										</div>
										<div className='d-flex justify-content-end'>
											<div className='d-flex justify-content-end'>
												<button className='btn btn-danger mr-2' onClick={backward}>
													Prev
												</button>
											</div>
											<button className='btn btn-success' onClick={forward}>
												Complete
											</button>
										</div>
										<div className='progress mt-4'>
											<div
												className='bg-success progress-bar progress-bar-animated progress-bar-striped'
												role='progressbar'
												style={{ width: '80%' }}
												aria-valuenow='80'
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

export default ChildInfo;
