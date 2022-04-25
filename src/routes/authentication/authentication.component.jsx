import { Container, Row, Col } from 'react-bootstrap';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
	return (
		<div className='container mt-4'>
			<h1 className='my-4'>Sign In Page</h1>
			<Container>
				<Row>
					<Col>
						<SignInForm />
					</Col>
					<Col>
						<SignUpForm />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Authentication;
