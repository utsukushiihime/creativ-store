import React from "react";
import { Routes, Route } from "react-router-dom";

import CategoriesPreviwew from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
	return (
			<Routes>
				<Route index element={<CategoriesPreviwew />} />
				<Route path=":category" element={<Category />} />
			</Routes>
	);
};

export default Shop;
