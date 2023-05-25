import { Outlet } from 'react-router-dom'
import './App.css'
import { Layout } from "antd";
import Navbar from './components/Navbar'
import AppRouter from './components/AppRouter'
import { useEffect } from 'react';
import { IUser } from './models/IUser';
import { useActions } from './hooks/useActions';

function App() {

	const {setAuth, setUser} = useActions()

	useEffect(() => {
		if (localStorage.getItem('auth')){
			setUser({username: localStorage.getItem('username' || '') } as IUser)
			setAuth(true)
		}
	}, [])

	return (
		<>
			<Layout>
				<Navbar />
				<Layout.Content>
					<Outlet />
				</Layout.Content>
			</Layout>
			<AppRouter />
		</>
	)
}

export default App
