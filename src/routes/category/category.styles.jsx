import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const CategoryContainer = styled(Container)`
	& h2 {
		& a {
			color: #000;
			text-decoration: none;
		}
	}
`;
