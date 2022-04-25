import { Outlet } from 'react-router-dom';

const Navigation = () => {
	return (
		<>
			<h1>I am the navbar</h1>

			<Outlet />
		</>
	);
};

export default Navigation;