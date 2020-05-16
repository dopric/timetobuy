import React from 'react'

export default class ProductDetails extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'T-Shirt',
			description: 'Super shirt',
			price: '12.95'
		}
	}

	render() {
		const { name, description, price } = this.state

		return (
			<div className='row'>
				<div className='media'>
					<img
						src='https://via.placeholder.com/600/FFFF00/000000?Text=WebsiteBuilders.com'
						className='mr-3'
						alt='Product'
					/>
					<div className='media-body'>
						<h3>ID {this.props.match.params.id}</h3>
						<h1>{name}</h1>
						<p>{description}</p>
						<p>{price}</p>
					</div>
				</div>
			</div>
		)
	}
}
