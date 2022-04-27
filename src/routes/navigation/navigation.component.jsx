import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

import { ReactComponent as Logo } from '../../assets/images/logos/creativarian-logo.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';


const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);

	const signOutHandler = async () => {
		await signOutUser();

		console.log('signed out');
	};

	return (
		<>
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Container fluid>
					<Navbar.Brand href='/'>
						<Logo style={{width: '50px'}} className='logo' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse
						id='navbarScroll'
						className='justify-content-end'
					>
						<Nav
							className='me-auto my-2 my-lg-0'
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<Nav.Link href='/'>Home</Nav.Link>
							<NavDropdown
								title='Services'
								id='navbarScrollingDropdown'
							>
								<NavDropdown.Item href='/services/development'>
									Development
								</NavDropdown.Item>
								<NavDropdown.Item href='/services/design'>
									Design
								</NavDropdown.Item>
								<NavDropdown.Item href='/services/seo'>
									SEO
								</NavDropdown.Item>
								<NavDropdown.Item href='/services/content-writing'>
									Content Writing
								</NavDropdown.Item>

								<NavDropdown.Divider />
								<NavDropdown.Item href='/services/consulting'>
									Consulting
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							<Nav.Link href='shop'>Shop</Nav.Link>

							{currentUser ? (
								<Nav.Link>
									<span onClick={signOutHandler}>
										Sign Out
									</span>
								</Nav.Link>
							) : (
								<Nav.Link href='/auth'>Sign In</Nav.Link>
							)}
						</Nav>
							<CartIcon />
							{isCartOpen && <CartDropDown />}
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Outlet />
		</>
	);
};

export default Navigation;
