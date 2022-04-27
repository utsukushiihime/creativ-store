import { Col, Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
	const { id, name, price, imageUrl } = product;

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
						<Button className='btn btn-dark rounded-0'>
							Add to Cart
						</Button>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
};

export default ProductCard;
