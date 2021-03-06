import { Container, Row, Col } from 'react-bootstrap';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
	return (
		<div className='container mt-4'>
			<Container>
				<Row>
					<Col>
						<SignInForm />
					</Col>
					<Col className='mx-md-4'>
						<SignUpForm />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Authentication;
