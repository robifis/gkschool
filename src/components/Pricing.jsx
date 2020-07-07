import React from 'react';

const Pricing = () => {
	return (
		<div id='pricing' className='d-flex align-items-center justify-content-center'>
			<div className='container'>
				<div className='row'>
					<div className='col-4'>
						<div className='card'>
							<div class='card-header text-center'>Dean Henderson</div>
							<img
								src='https://image.flaticon.com/icons/png/512/26/26660.png'
								className='card-img-top'
								alt='...'
							/>
							<div className='card-body'>
								<p className='card-text'>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<p className='card-text'>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>

								<ul className='list-group list-group-flush my-4'>
									<h5 className='text-center'>What's included</h5>
									<li className='list-group-item'>
										<i className=' text-success fa fa-check mr-2' />Access to our excellent coaches
									</li>
									<li className='list-group-item'>
										<i className=' text-success fa fa-check mr-2' />Watch training sessions online
									</li>
									<li className='list-group-item '>
										<i className='text-success fa fa-check mr-2' />Latest news about goalkeeping
									</li>
									<li className='list-group-item '>
										<i className='text-danger fa fa-times mr-2' />New pair of gloves every month
									</li>
									<li className='list-group-item '>
										<i className='text-danger fa fa-times mr-2' />Lunch box after training
									</li>
								</ul>
								<h3 className='card-title text-center'>£40 per month</h3>
								<a href='#' className='btn btn-block btn-success'>
									Join Now
								</a>
							</div>
						</div>
					</div>
					<div className='col-4'>
						<div className='card'>
							<div class='card-header text-center'>Hugo Lloirs</div>

							<img
								src='https://image.flaticon.com/icons/png/512/26/26660.png'
								className='card-img-top'
								alt='...'
							/>
							<div className='card-body'>
								<p className='card-text'>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<p className='card-text'>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<ul className='list-group list-group-flush my-4'>
									<h5 className='text-center'>What's included</h5>
									<li className='list-group-item'>
										<i className=' text-success fa fa-check mr-2' />Access to our excellent coaches
									</li>
									<li className='list-group-item'>
										<i className=' text-success fa fa-check mr-2' />Watch training sessions online
									</li>
									<li className='list-group-item '>
										<i className='text-success fa fa-check mr-2' />Latest news about goalkeeping
									</li>
									<li className='list-group-item '>
										<i className='text-success fa fa-check mr-2' />New pair of gloves every month
									</li>
									<li className='list-group-item '>
										<i className='text-danger fa fa-times mr-2' />Lunch box after training
									</li>
								</ul>
								<h3 className='card-title text-center'>£50 per month</h3>
								<a href='#' className='btn btn-block btn-danger'>
									Join Now
								</a>
							</div>
						</div>
					</div>
					<div className='col-4'>
						<div className='card'>
							<div class='card-header text-center'>Gigi Buffon</div>
							<img
								src='https://image.flaticon.com/icons/png/512/26/26660.png'
								className='card-img-top'
								alt='...'
							/>
							<div className='card-body'>
								<p className='card-text'>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<p className='card-text'>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<ul className='list-group list-group-flush my-4'>
									<h5 className='text-center'>What's included</h5>
									<li className='list-group-item'>
										<i className=' text-success fa fa-check mr-2' />Access to our excellent coaches
									</li>
									<li className='list-group-item'>
										<i className=' text-success fa fa-check mr-2' />Watch training sessions online
									</li>
									<li className='list-group-item '>
										<i className='text-success fa fa-check mr-2' />Latest news about goalkeeping
									</li>
									<li className='list-group-item '>
										<i className='text-success fa fa-check mr-2' />New pair of gloves every month
									</li>
									<li className='list-group-item '>
										<i className='text-success fa fa-check mr-2' />Lunch box after training
									</li>
								</ul>
								<h3 className='card-title text-center'>£60 per month</h3>
								<a href='#' className='btn btn-block btn-info'>
									Join Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
