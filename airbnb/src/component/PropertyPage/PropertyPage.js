import React, { Component } from 'react';
import ReviewList from '../Review/ReviewList/ReviewList';
import Booking from '../Booking/Booking';
import './PropertyPage.css';

//TODO: also needs to pass the user information.
//TODO: also needs to grab the host id when we query database

class PropertyPage extends Component {
	constructor() {
		super();
		this.state = {
			property: {},
			reviews: [
				{
					id: 1,
					username: 'Dummy 1',
					rating: 4.5,
					date: 'Febuary 2020',
					comment:
						'Officia laborum ad consectetur deserunt consectetur veniam velit consequat exercitation sint adipisicing ipsum in consequat. Minim ea id elit ad veniam reprehenderit. Minim occaecat eiusmod mollit enim excepteur veniam voluptate. Nulla anim excepteur eiusmod ipsum est consectetur laborum.'
				},
				{
					id: 2,
					username: 'Dummy 2',
					rating: 2,
					date: 'March 2020',
					comment:
						'Est reprehenderit eu tempor et excepteur dolor. Eu aliqua culpa dolore in sint reprehenderit laborum nisi amet ullamco. Minim ipsum aliqua consequat ea occaecat. Quis magna reprehenderit mollit exercitation occaecat amet esse elit consectetur esse magna. Et proident est labore cupidatat velit ea Lorem esse commodo cupidatat. Ipsum Lorem culpa ea fugiat anim ea. Ad nisi cillum sit excepteur reprehenderit sint.'
				},
				{
					id: 3,
					username: 'Dummy 1',
					rating: 4.5,
					date: 'Febuary 2020',
					comment:
						'Officia laborum ad consectetur deserunt consectetur veniam velit consequat exercitation sint adipisicing ipsum in consequat. Minim ea id elit ad veniam reprehenderit. Minim occaecat eiusmod mollit enim excepteur veniam voluptate. Nulla anim excepteur eiusmod ipsum est consectetur laborum.'
				},
				{
					id: 4,
					username: 'Dummy 1',
					rating: 4.5,
					date: 'Febuary 2020',
					comment:
						'Officia laborum ad consectetur deserunt consectetur veniam velit consequat exercitation sint adipisicing ipsum in consequat. Minim ea id elit ad veniam reprehenderit. Minim occaecat eiusmod mollit enim excepteur veniam voluptate. Nulla anim excepteur eiusmod ipsum est consectetur laborum.'
				}
			],

			room: {
				numGuest: 2,
				numBedroom: 1,
				numBed: 1,
				numBath: 1
			}
		};
	}

	componentDidMount() {
		this.setState({
			property: this.props.property
		});
	}

	render() {
		const { property } = this.props;
		const { room, reviews } = this.state;
		return (
			<div className='propertyPage'>
				<div className='propertyContent'>
					<div>
						<h2> {property.title} </h2>
						<p> {property.location} </p>
						<p>Host</p>
					</div>
					<div className='roomContainer'>
						<p>{`${room.numGuest} guests`}</p>
						<p>{`${room.numBedroom} bedroom`}</p>
						<p>{`${room.numBed} bed`}</p>
						<p>{`${room.numBath} bathroom`}</p>
					</div>

					<div className='rcl'>
						<div className='lineMargin'>
							<div className='lml'></div>
						</div>
					</div>
					<div>
						<p>
							Id dolor do mollit Lorem
							dolore adipisicing.
							Aliquip sint esse mollit
							eu ad. Esse duis sit
							occaecat ullamco eu aute
							in adipisicing
							exercitation dolor
							aliquip adipisicing
							culpa. Ea duis nisi
							eiusmod tempor aliqua
							commodo pariatur
							exercitation non
							adipisicing pariatur in
							duis commodo. Duis
							commodo velit irure do
							sint nostrud minim
							deserunt consectetur
							laboris fugiat dolore
							aute. Velit amet dolor
							enim non. Ea eu irure ex
							sunt.
						</p>
					</div>

					<div className='lineMargin'>
						<div className='lml'></div>
					</div>
					<ReviewList reviews={reviews} />
				</div>

				<div className='bookingDiv'>
					<div>
						<div
							style={{
								marginTop:
									'32px',
								marginBottom:
									'24px'
							}}
						>
							<div className='innerBooking'>
								<Booking
									price={
										property.price
									}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PropertyPage;