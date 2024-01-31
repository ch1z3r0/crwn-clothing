import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './route/home/home.component';
import Navigation from './route/navigation/navigation.component';
import Authentication from './route/authentication/authentication.component';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='/auth' element={<Authentication />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
