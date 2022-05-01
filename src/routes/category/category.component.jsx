import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './category.styles.scss';
import { Container, Row } from 'react-bootstrap';

import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		const products = categoriesMap[category];
		setProducts(products);
	}, [category, categoriesMap]);

	return (
		<Container className='category-preview-container'>
			<Row>
				<h2 className='title'>{category.toUpperCase()}</h2>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Row>
		</Container>
	);
};

export default Category;
