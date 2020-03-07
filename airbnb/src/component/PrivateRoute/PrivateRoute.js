import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isSignedIn, component: Component, ...rest }) => {
	console.log('Signed: ' + isSignedIn);
	return (
		<Route
			{...rest}
			component={props =>
				isSignedIn ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: {
								from:
									props.location
							}
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
