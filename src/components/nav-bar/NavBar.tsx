import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export function NavBar() {
	return (
		<nav>
			<Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
				<Menu.Item key='1'>
					<Link to='/'>
						Home
					</Link>
				</Menu.Item>
				<Menu.Item key='2'>
					<Link to='/games'>
						Games
					</Link>
				</Menu.Item>
				<Menu.Item key='3'>
					<Link to='/gameLookup'>
						Game Lookup
					</Link>
				</Menu.Item>
				<Menu.Item key='4'>
					<Link to='/movieLookup'>
						Movie Lookup
					</Link>
				</Menu.Item>
				<Menu.Item key='5'>
					<Link to='/github'>
						Github Lookup
					</Link>
				</Menu.Item>
				<Menu.Item key='6'>
					<Link to='/components'>
						Components List
					</Link>
				</Menu.Item>
			</Menu>
		</nav>
	);
}
