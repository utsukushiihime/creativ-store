import './directory-item.styles.scss';
import { Link } from 'react-router-dom';

// TODO Add Styled Components

const DirectoryItem = ({ category }) => {
	const { imageUrl, title } = category;

	return (
		<>
			<div className='directory-item-container'>
				<div
					className='background-image'
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				/>
				<div className='directory-item-body-container'>
					<h2>{title.toUpperCase()}</h2>
					<Link to={`/shop/${title}`}>Shop Now</Link>
				</div>
			</div>
		</>
	);
};

export default DirectoryItem;
