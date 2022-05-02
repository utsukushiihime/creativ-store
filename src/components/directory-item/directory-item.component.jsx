import { DirectoryItemContainer } from './directory-item.styles';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
	const { imageUrl, title, route } = category;
	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(route);

	return (
		<>
			<DirectoryItemContainer onClick={onNavigateHandler}>
				<div
					className='background-image'
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				/>
				<div className='directory-item-body-container'>
					<h2>{title.toUpperCase()}</h2>
					<p>Shop Now</p>
				</div>
			</DirectoryItemContainer>
		</>
	);
};

export default DirectoryItem;
