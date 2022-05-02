import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const CategoriesPreviewContainer = styled(Container)`
	& h2 {
		& a {
			color: #000;
			text-decoration: none;
			cursor: pointer;

			&:hover {
				color: #df4d40;
				text-decoration: none;
			}
		}
	}
`;
