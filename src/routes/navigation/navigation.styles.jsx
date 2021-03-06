import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
	background-color: black;
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 15px;
`;

export const NavLinks = styled.div`
	color: white;
	text-decoration: none;
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	color: white;
	padding: 10px 15px;
	cursor: pointer;

	&:hover {
		color: #df4d40;
	}
`;
