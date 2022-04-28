import { createContext, useState, useEffect } from 'react';
// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';

// import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
	products: [],
});

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const value = { products };

	// *** used only once to set the products in DB ******************
	// useEffect(() => {
	// 	const fetchProducts = async () => {
	// 		const products = await addCollectionAndDocuments(
	// 			'categories',
	// 			SHOP_DATA
	// 		);
	// 		setProducts(products);
	// 	};
	// 	fetchProducts();
	// }, []);

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};
