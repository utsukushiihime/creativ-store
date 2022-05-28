import { useSelector } from "react-redux";

import { Row } from "react-bootstrap";
import { CategoriesPreviewContainer } from "./categories-preview.styles";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { categorySelector } from "../../store/categories/category.selector";

const CategoriesPreviwew = () => {
	const { categoriesMap } = useSelector(categorySelector);
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
