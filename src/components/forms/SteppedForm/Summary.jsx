import React from 'react';
import { useForm } from 'react-hook-form';

const Summary = ({ values }) => {
	const { handleSubmit } = useForm();
	const { prevStep, formData } = values;
	console.log(values);
	function backward (e){
		e.preventDefault();
		prevStep();
	}

	function submitData (e){
		e.preventDefault();
		console.log('Data Submitted');
	}
	return (
		<div className='row my-4'>
			<div className='col-3' />
			<div className='col-6'>
				<h1>Summary</h1>
				<ul className='list-group list-group-flush'>
					<label htmlFor='firstName'>First Name</label>
					<li className='list-group-item'>{formData.parentOne_firstName}</li>
					<label htmlFor='firstName'>Last Name</label>
					<li className='list-group-item'>{formData.parentOne_lastName}</li>
				</ul>
				<button className='btn btn-outline-danger mr-2' onClick={backward}>
					Prev
				</button>
				<button className='btn btn-success' onClick={handleSubmit(submitData)}>
					Submit
				</button>
			</div>
			<div className='col-3' />
		</div>
	);
};

export default Summary;
