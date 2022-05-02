import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

import { Row } from 'react-bootstrap';
import { CategoriesPreviewContainer } from './categories-preview.styles';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreviwew = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
		<CategoriesPreviewContainer>
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
		</CategoriesPreviewContainer>
	);
};

export default CategoriesPreviwew;
