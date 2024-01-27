import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './route/home/home.component';
import Navigation from './route/navigation/navigation.component';
import SignIn from './route/sign-in/sign-in.component';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='/sign-in' element={<SignIn />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
