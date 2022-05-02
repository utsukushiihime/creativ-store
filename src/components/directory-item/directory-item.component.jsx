import { DirectoryItemContainer} from './directory-item.styles';
import { Link } from 'react-router-dom';

// TODO Add Styled Components

const DirectoryItem = ({ category }) => {
	const { imageUrl, title } = category;

	return (
		<>
			<DirectoryItemContainer>
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
			</DirectoryItemContainer>
		</>
	);
};

export default DirectoryItem;
