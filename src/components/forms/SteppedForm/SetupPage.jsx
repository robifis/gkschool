import React, { useState } from 'react';
import RegisterParentOne from './Step1';
import ChildInfo from './Step4';
import RegisterParentTwo from './Step2';
import NextOfKin from './Step3';
import Summary from './Summary';

const RegisterForm = () => {
	const [
		step,
		setStep,
	] = useState(1);

	const defaultValues = {
		// Parents One
		parentOne_firstName    : '',
		parentOne_lastName     : '',
		parentOne_mobileNumber : '',
		// Parent Two
		parentTwo_firstName    : '',
		parentTwo_lastName     : '',
		parentTwo_mobileNumber : '',
		// Next of Kin
		nextOfKin_firstName    : '',
		nextOfKin_lastName     : '',
		nextOfKin_mobileNumber : '',
		// Child Info
		child_firstName        : '',
		child_lastName         : '',
		child_dateOfBirth      : '',
		// Additional Information
		allergies              : '',
		medication             : '',
		disabilities           : '',
		other                  : '',
		videoConsent           : '',
	};

	// State management for form values!
	const [
		formData,
		setFormData,
	] = useState(defaultValues);

	// Moving onto next Step
	const nextStep = () => {
		console.log(step);
		setStep(step + 1);
	};

	// Going back a Step
	const prevStep = () => {
		console.log(step);
		setStep(step - 1);
	};

	const handleChange = (e) => {
		console.log(e.target.value);
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Destructuring the form in a variable and passing down the data from the form!
	const values = { prevStep, nextStep, handleChange, formData };

	//Switch Statement here to display the form depending on the value of the step!
	switch (step) {
		default:
			return <RegisterParentOne values={values} />;
		case 1:
			return <RegisterParentOne values={values} />;
		case 2:
			return <RegisterParentTwo values={values} />;
		case 3:
			return <NextOfKin values={values} />;
		case 4:
			return <ChildInfo values={values} />;
		case 5:
			return <Summary values={values} />;
	}
};

export default RegisterForm;
