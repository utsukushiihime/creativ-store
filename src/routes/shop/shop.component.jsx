import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import { Container, Row } from 'react-bootstrap';
import './shop.styles.scss';

const Shop = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
		<Container className='mt-4'>
			<h1> SHOPPE</h1>
			<Row>
				{Object.keys(categoriesMap).map((title) => (
					<Fragment key={title}>
						<h2>{title}</h2>
						<div className='row'>
							{categoriesMap[title].map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
						</div>
					</Fragment>
				))}
			</Row>
		</Container>
	);
};

export default Shop;
