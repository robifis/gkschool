import React from 'react';
import Navbar from './components/nav/Navbar';
import LoginCard from './components/forms/LoginCard';
import Pricing from './components/Pricing';
import SetupPage from './components/forms/SteppedForm/SetupPage';
import Team from './components/Team';
import Home from './components/Home';
import Footer from './components/nav/Footer';
import RegisterCard from './components/forms/RegisterCard';
import { Switch, Route } from 'react-router-dom';

function App (){
	return (
		<div>
			<Navbar />
			<Footer />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/pricing'>
					<Pricing />
				</Route>
				<Route path='/login'>
					<LoginCard />
				</Route>
				<Route path='/team'>
					<Team />
				</Route>
				<Route path='/register'>
					<RegisterCard />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
