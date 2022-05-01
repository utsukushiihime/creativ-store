import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

import { Container, Row } from 'react-bootstrap';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import '../../components/category-preview/category-preview.styles.scss';

const CategoriesPreviwew = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
		<Container className='mt-4'>
			<Row>
				{Object.keys(categoriesMap).map((key) => {
					const products = categoriesMap[key];
					return (
						<CategoryPreview
							key={key}
							title={key}
							products={products}
						/>
					);
				})}
			</Row>
		</Container>
	);
};

export default CategoriesPreviwew;
