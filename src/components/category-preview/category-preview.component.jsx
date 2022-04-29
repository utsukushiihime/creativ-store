import React from 'react';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
	return (
		<div className='category-preview-container'>
			<h2>
				<span className='title'>{title.toUpperCase()}</span>
			</h2>
			<div className='preview'>
				{products
					.filter((product, idx) => idx < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export default CategoryPreview;
