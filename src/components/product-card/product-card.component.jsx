import { useContext} from 'react';
import { Col, Card } from 'react-bootstrap';
import Button from '../button/button.component';

import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
	const { id, name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => {
		addItemToCart(product);
	};

	return (
		<>
			<Col className='mb-4' key={id}>
				<Card style={{ width: '18rem' }}>
					<Card.Img
						variant='top'
						src={imageUrl}
						alt={name}
						style={{
							maxHeight: '280px',
							objectFit: 'cover',
						}}
					/>
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<Card.Text className='fs-1'>${price}</Card.Text>
						<Button onClick={addProductToCart}>Add to Cart</Button>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
};

export default ProductCard;
