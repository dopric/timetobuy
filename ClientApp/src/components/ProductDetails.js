import React from 'react'
import Axios from 'axios'
import { Button, TextField } from '@material-ui/core'

export default class ProductDetails extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			description: '',
			price: '',
			img: ''
		}
	}

	async componentDidMount() {
		
		let result = await Axios(`/api/products/${this.props.match.params.id}`);
		console.log(result.data)
		let product = result.data;
		
		this.setState({
			id: product.id,
			name: product.name,
			description: product.description,
			price: product.price,
			img: product.image
		})
	}

	render() {
		const { name, description, price, img } = this.state
		if (!name || name.length === 0) {
			return <div> <h3>Product not found </h3></div>
		}
		return (
			
			<div className='row'>
				
					<div className='media'>
						<img
							src='https://via.placeholder.com/600/FFFF00/000000?Text=WebsiteBuilders.com'
							className='mr-3'
							alt='Product'
						/>
						<div className='media-body'>
						<TextField value={name}></TextField>
							<TextField value={description}/>
						<TextField value={price} />

						<Button variant="contained" color="primary">
							Save
							</Button>
						</div>
					</div>
			</div>
		)
	}
}
