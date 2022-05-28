import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./category.styles";
import { Row } from "react-bootstrap";

import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer } from "./category.styles";
import { categorySelector } from "../../store/categories/category.selector";

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useSelector(categorySelector);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		const products = categoriesMap[category];
		setProducts(products);
	}, [category, categoriesMap]);

	return (
		<CategoryContainer>
			<Row>
				<h2 className="title">{category.toUpperCase()}</h2>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Row>
		</CategoryContainer>
	);
};

export default Category;
