import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';
import { Container, Row } from 'react-bootstrap';

const Shop = () => {
	const { products } = useContext(ProductsContext);
	return (
		<Container className='mt-4'>
			<Row>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</Row>
		</Container>
	);
};

export default Shop;
