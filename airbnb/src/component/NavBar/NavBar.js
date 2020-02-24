import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../airbnb-1.svg';
import ProfileMenu from './ProfileMenu';
import './NavBar.css';

//TODO: Make list more dynamic

class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			menuOpen: false
		};
	}

	toggleMenu = () => {
		this.setState({
			menuOpen: !this.state.menuOpen
		});
		console.log('toggle');
	};

	render() {
		let linkMarkup = this.props.links.map((link, i) => {
			return (
				<li>
					<Link
						to={link.link}
						className='link-styless'
					>
						<div className='nav-padding'>
							{link.label}
						</div>
					</Link>
				</li>
			);
		});
		return (
			<header id='navbar'>
				<nav>
					<div className='logo nav-items'>
						<Link to='/'>
							<img
								src={logo}
								alt='AirBnB'
								style={{
									height:
										'30px'
								}}
							/>
						</Link>
					</div>

					<div className='padding'></div>

					<div className='nav-links nav-items'>
						<ul className='nav-menu'>
							{linkMarkup}
							<li>
								<div
									onClick={
										this
											.toggleMenu
									}
									className='nav-padding'
								>
									<div className='profile'>
										<img
											alt='Rodger’s account'
											src='https://a0.muscache.com/defaults/user_pic-50x50.png?v=3'
										/>
									</div>
								</div>
								{this.state
									.menuOpen ? (
									<ProfileMenu
										toggleMenu={
											this
												.toggleMenu
										}
									/>
								) : null}
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default NavBar;